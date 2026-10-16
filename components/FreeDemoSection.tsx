"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";
import {
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  ShieldCheck,
  User,
  Phone,
  BookOpen,
  Clock,
  Sparkles,
} from "lucide-react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 letters)")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)"),
  courseInterested: z.string().min(1, "Please select a course"),
  currentLevel: z.enum(["Beginner", "Intermediate", "Advanced", "Not Sure"] as const),
  preferredTime: z.enum([
    "Morning (7 AM - 10 AM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (5 PM - 8 PM)",
    "Any Time",
  ] as const),
  message: z.string().max(500, "Message cannot exceed 500 characters").optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

type FormData = z.infer<typeof formSchema>;

interface FreeDemoFormProps {
  isModal?: boolean;
  preselectedCourse?: string;
  onSuccessClose?: () => void;
}

export default function FreeDemoSection({
  isModal = false,
  preselectedCourse,
  onSuccessClose,
}: FreeDemoFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      courseInterested: preselectedCourse || siteConfig.courses[0].title,
      currentLevel: "Beginner",
      preferredTime: "Morning (7 AM - 10 AM)",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: isModal ? "Popup Demo Modal" : "Page Demo Section",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setSubmittedData(data);
        trackFormSubmit(data.courseInterested, data.preferredTime);

        // Fire festive confetti animation
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore if canvas-confetti is not supported
        }

        reset();
      } else {
        setErrorMessage(
          result.message || "Failed to submit. Please try calling or WhatsApping us directly."
        );
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setErrorMessage(
        "Could not connect to the server. Please call or WhatsApp us at +91 73545 23597."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappFollowUpText = submittedData
    ? `Hello Sir! I just registered for a Free Demo Class on your website.\n\n👤 Name: ${submittedData.fullName}\n📱 Phone: ${submittedData.phone}\n📚 Course: ${submittedData.courseInterested}\n⏰ Preferred Time: ${submittedData.preferredTime}\n\nPlease confirm my demo slot!`
    : `Hello! I would like to book a Free Demo Class at Creative English Spoken Center, Ambikapur.`;

  const formContent = (
    <div className={`w-full ${isModal ? "p-0" : "bg-white rounded-3xl shadow-card border border-slate-100 p-6 sm:p-10"}`}>
      {submitSuccess && submittedData ? (
        <div className="text-center py-6 space-y-5 animate-in fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-extrabold text-brand-navy-900">
              Seat Reserved Successfully! 🎉
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-brand-navy-900">{submittedData.fullName}</strong>. Our senior mentor will call you on{" "}
              <strong className="text-brand-navy-900">+91 {submittedData.phone}</strong> within 2 hours to confirm your demo batch.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
            <p>
              <span className="font-semibold text-slate-500">Course:</span> {submittedData.courseInterested}
            </p>
            <p>
              <span className="font-semibold text-slate-500">Preferred Slot:</span> {submittedData.preferredTime}
            </p>
            <p>
              <span className="font-semibold text-slate-500">Center:</span> Banaras Road, near Renuka Girls Hostel, Ambikapur
            </p>
          </div>

          {/* Instant WhatsApp Confirmation Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, whatsappFollowUpText)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("Lead Success Followup", submittedData.courseInterested)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all min-h-[44px]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Confirm Instantly on WhatsApp</span>
            </a>

            {isModal && onSuccessClose && (
              <button
                type="button"
                onClick={onSuccessClose}
                className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 min-h-[44px]"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
              <div>
                <p className="font-semibold">Submission failed</p>
                <p className="text-xs mt-0.5 text-red-600">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Hidden honeypot anti-spam field */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            {...register("honeypot")}
          />

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-brand-navy-900 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-amber-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...register("fullName")}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brand-navy-900 placeholder:text-slate-400 focus:bg-white transition-all min-h-[44px] ${
                  errors.fullName
                    ? "border-red-400 bg-red-50/30"
                    : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-brand-navy-900 uppercase tracking-wider mb-1.5">
              10-Digit Mobile Number <span className="text-amber-600">*</span>
            </label>
            <div className="relative flex rounded-xl shadow-xs">
              <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-semibold">
                +91
              </span>
              <input
                id="phone"
                type="tel"
                maxLength={10}
                placeholder="7354523597"
                {...register("phone")}
                className={`w-full px-3.5 py-3 rounded-r-xl border text-sm text-brand-navy-900 placeholder:text-slate-400 focus:bg-white transition-all min-h-[44px] ${
                  errors.phone
                    ? "border-red-400 bg-red-50/30"
                    : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                }`}
              />
            </div>
            {errors.phone ? (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone.message}
              </p>
            ) : (
              <p className="text-[11px] text-slate-500 mt-1">We will send batch timing & demo slot details via WhatsApp / Call.</p>
            )}
          </div>

          {/* Course Interested Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="courseInterested" className="block text-xs font-bold text-brand-navy-900 uppercase tracking-wider mb-1.5">
                Course Interested <span className="text-amber-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <select
                  id="courseInterested"
                  {...register("courseInterested")}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-brand-navy-900 hover:border-slate-300 focus:bg-white transition-all min-h-[44px]"
                >
                  {siteConfig.courses.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Current Level */}
            <div>
              <label htmlFor="currentLevel" className="block text-xs font-bold text-brand-navy-900 uppercase tracking-wider mb-1.5">
                Current English Level
              </label>
              <select
                id="currentLevel"
                {...register("currentLevel")}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-brand-navy-900 hover:border-slate-300 focus:bg-white transition-all min-h-[44px]"
              >
                <option value="Beginner">Beginner (Can understand, cannot speak)</option>
                <option value="Intermediate">Intermediate (Know words, lack fluency)</option>
                <option value="Advanced">Advanced (Looking for public speaking polish)</option>
                <option value="Not Sure">Not Sure (Need Mentor Assessment)</option>
              </select>
            </div>
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="preferredTime" className="block text-xs font-bold text-brand-navy-900 uppercase tracking-wider mb-1.5">
              Preferred Batch Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Clock className="w-4 h-4" />
              </div>
              <select
                id="preferredTime"
                {...register("preferredTime")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-brand-navy-900 hover:border-slate-300 focus:bg-white transition-all min-h-[44px]"
              >
                <option value="Morning (7 AM - 10 AM)">Morning Batch (7:00 AM - 10:00 AM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon / School Batch (12:00 PM - 4:00 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening Batch (5:00 PM - 8:00 PM)</option>
                <option value="Any Time">Any Time / Flexible</option>
              </select>
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-brand-navy-900 uppercase tracking-wider mb-1.5">
              Specific Goal or Questions <span className="text-slate-400 text-xs font-normal">(Optional)</span>
            </label>
            <textarea
              id="message"
              rows={2}
              placeholder="e.g. Preparing for bank interview / Want to overcome stage fear..."
              {...register("message")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-brand-navy-900 placeholder:text-slate-400 hover:border-slate-300 focus:bg-white transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 disabled:opacity-70 text-brand-navy-950 font-extrabold text-base shadow-amber transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 min-h-[48px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Reserving Your Demo Seat...</span>
              </>
            ) : (
              <>
                <CalendarCheck className="w-5 h-5 text-brand-navy-950" />
                <span>Book 100% Free Demo Class Now</span>
              </>
            )}
          </button>

          {/* Trust Guarantee */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero obligation • No payment required • 100% confidential</span>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section id="free-demo" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-navy-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber-100 text-brand-amber-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-amber-600" />
              Limited Free Demo Seats Available
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 leading-tight">
              Attend a Live 1-Hour <br />
              <span className="text-brand-navy-800 underline decoration-brand-amber-500 decoration-wavy decoration-2">
                Speaking Demo Session
              </span>{" "}
              in Ambikapur
            </h2>

            <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed">
              Experience our unique <strong>speaking-first method</strong> before paying a single rupee.
              Step into the classroom, participate in a micro-group discussion, and get your personalized fluency roadmap from our head trainer.
            </p>

            {/* Checklist of what they get */}
            <div className="space-y-3.5 pt-2">
              {[
                "1-on-1 English Hesitation & MTI Diagnosis",
                "Live participation in daily group discussion drills",
                "Customized study plan & course recommendation",
                "Free spoken English sentence formula cheat-sheet",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-brand-navy-900">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Alternative */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">Need instant clarification?</p>
                <p className="text-sm font-bold text-brand-navy-900">Speak directly with our counselor</p>
              </div>
              <a
                href={getWhatsAppUrl(
                  siteConfig.contact.whatsappNumber,
                  "Hello! I want to attend the free demo class at Creative English Spoken Center Ambikapur."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("Demo Section WhatsApp")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs transition-all min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            {formContent}
          </div>
        </div>
      </div>
    </section>
  );
}
