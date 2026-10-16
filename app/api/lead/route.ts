import { NextResponse } from "next/server";
import { z } from "zod";

// Server-side Zod Schema
const leadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  courseInterested: z.string().min(1, "Please select a course"),
  currentLevel: z.enum(["Beginner", "Intermediate", "Advanced", "Not Sure"]),
  preferredTime: z.enum(["Morning (7 AM - 10 AM)", "Afternoon (12 PM - 4 PM)", "Evening (5 PM - 8 PM)", "Any Time"]),
  message: z.string().max(500, "Message is too long").optional().default(""),
  honeypot: z.string().max(0, "Bot detected").optional().default(""), // Honeypot field must be empty
  source: z.string().optional().default("Website Free Demo Form"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Validation
    const validationResult = leadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
          message: "Please correct the highlighted errors in the form.",
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // 2. Honeypot anti-spam check
    if (leadData.honeypot && leadData.honeypot.trim().length > 0) {
      // Pretend success to bots without recording
      return NextResponse.json({ success: true, message: "Lead submitted successfully." });
    }

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const submissionPayload = {
      ...leadData,
      submittedAt: formattedDate,
      isoTimestamp: timestamp,
      institute: "Creative English Spoken Center - Ambikapur",
    };

    console.log("=================================================");
    console.log("📥 NEW LEAD RECEIVED (Creative English Spoken Center):");
    console.log(JSON.stringify(submissionPayload, null, 2));
    console.log("=================================================");

    const errorsEncountered: string[] = [];

    // 3. Optional Forward to Google Sheets Webhook
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetWebhookUrl && googleSheetWebhookUrl.startsWith("http")) {
      try {
        const response = await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionPayload),
        });

        if (!response.ok) {
          console.warn(`[Google Sheet Webhook Warning] Status: ${response.status}`);
          errorsEncountered.push("Google Sheets webhook returned non-200");
        } else {
          console.log("✅ Lead successfully synced to Google Sheets!");
        }
      } catch (sheetError) {
        console.error("[Google Sheet Webhook Error]:", sheetError);
        errorsEncountered.push("Failed to connect to Google Sheets webhook");
      }
    } else {
      console.log(
        "ℹ️ [Google Sheet Note]: GOOGLE_SHEET_WEBHOOK_URL is not set or placeholder. Lead logged to console."
      );
    }

    // 4. Optional Forward to Resend Email
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "creativeenglishambikapur@gmail.com";
    if (resendApiKey && resendApiKey.startsWith("re_")) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Creative English Leads <onboarding@resend.dev>",
            to: [recipientEmail],
            subject: `🔥 New Demo Class Inquiry: ${leadData.fullName} (${leadData.courseInterested})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #1E3A8A; margin-bottom: 8px;">New Demo Class Inquiry!</h2>
                <p style="color: #64748b; font-size: 14px;">Creative English Spoken Center - Ambikapur</p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #475569; font-weight: bold; width: 140px;">Full Name:</td><td style="padding: 8px 0; color: #0f172a;">${leadData.fullName}</td></tr>
                  <tr><td style="padding: 8px 0; color: #475569; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #0f172a;"><a href="tel:+91${leadData.phone}" style="color: #1E3A8A; font-weight: bold;">+91 ${leadData.phone}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #475569; font-weight: bold;">Course:</td><td style="padding: 8px 0; color: #0f172a;">${leadData.courseInterested}</td></tr>
                  <tr><td style="padding: 8px 0; color: #475569; font-weight: bold;">Current Level:</td><td style="padding: 8px 0; color: #0f172a;">${leadData.currentLevel}</td></tr>
                  <tr><td style="padding: 8px 0; color: #475569; font-weight: bold;">Preferred Time:</td><td style="padding: 8px 0; color: #0f172a;">${leadData.preferredTime}</td></tr>
                  <tr><td style="padding: 8px 0; color: #475569; font-weight: bold;">Message:</td><td style="padding: 8px 0; color: #0f172a;">${leadData.message || "None"}</td></tr>
                  <tr><td style="padding: 8px 0; color: #475569; font-weight: bold;">Submitted:</td><td style="padding: 8px 0; color: #0f172a;">${formattedDate}</td></tr>
                </table>
                <div style="margin-top: 24px; text-align: center;">
                  <a href="https://wa.me/91${leadData.phone}?text=Hello%20${encodeURIComponent(leadData.fullName)},%20thank%20you%20for%20contacting%20Creative%20English%20Spoken%20Center%20Ambikapur%20for%20${encodeURIComponent(leadData.courseInterested)}!" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reply to Student on WhatsApp</a>
                </div>
              </div>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.warn(`[Resend Email Warning] Status: ${emailResponse.status}`);
        } else {
          console.log("✅ Resend notification email dispatched successfully!");
        }
      } catch (emailErr) {
        console.error("[Resend Email Error]:", emailErr);
      }
    }

    // Always return success to the user so demo & local development works reliably
    return NextResponse.json({
      success: true,
      message: "Thank you! Your Free Demo Class seat has been reserved. Our mentor will call you shortly.",
      data: {
        fullName: leadData.fullName,
        phone: leadData.phone,
        courseInterested: leadData.courseInterested,
      },
    });
  } catch (error) {
    console.error("[API Lead Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while saving your details. Please call or WhatsApp us directly.",
      },
      { status: 500 }
    );
  }
}
