# Creative English Spoken Center — Official Website

Modern, high-converting, mobile-first website for **Creative English Spoken Center**, the leading spoken English, public speaking, and personality development coaching institute located in **Ambikapur, Surguja, Chhattisgarh, India**.

---

## 🌟 Key Features

- **⚡ Blazing Fast Next.js (App Router) + TypeScript**: Static rendering with server-side API routes.
- **🎨 Custom Design System**: Deep Navy (`#1E3A8A`), vibrant Amber CTA (`#F59E0B`), soft shadows, rounded-2xl cards.
- **📱 100% Mobile Optimized (>80% Visitors)**: Minimum 44px tap targets, zero horizontal overflow at 320px+, sticky conversion bottom bar (Call, WhatsApp, Book Demo) with iOS safe-area support.
- **⚙️ Single Source of Truth (`/data/siteConfig.ts`)**: All institute details, courses, batch timings, fees, testimonials, FAQs, and NAP live in one single file.
- **📋 Lead Generation & Validation**:
  - Dual-mode form (Inline on homepage + Global popup modal).
  - Client & Server validation with **Zod** + **React Hook Form**.
  - 10-digit Indian mobile number validation.
  - Honeypot anti-spam protection.
  - Automatic forward to **Google Sheets** via Google Apps Script Webhook.
  - Optional instant email notifications via **Resend**.
  - Instant WhatsApp follow-up button pre-filled with student submission details.
- **🔍 Comprehensive Local SEO (Ambikapur & Surguja)**:
  - Open Graph & Twitter Cards.
  - Auto-generated `sitemap.xml` & `robots.txt`.
  - JSON-LD Structured Data: `EducationalOrganization`, `LocalBusiness`, `FAQPage`, and `Article`.
  - 3 Starter SEO Blog Guides for ranking on Google search.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18.18 or higher (Node 20+ / 24+ recommended)
- **npm** or **pnpm** / **yarn**

### 2. Installation
```bash
# Clone or navigate to the project directory
cd "e:\Client Website\Deepak sir"

# Install dependencies
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Test
```bash
npm run build
npm start
```

---

## ✏️ How to Edit Content (`/data/siteConfig.ts`)

Every piece of editable content on the website is centralized in:
📂 `data/siteConfig.ts`

You can change:
1. **Institute Phone & WhatsApp**: Update `contact.phone`, `contact.whatsappNumber`.
2. **Address & Landmark**: Update `contact.address`.
3. **Course Programs**: Edit title, Hindi title, duration, fee estimate, and bullet outcomes in `courses: [...]`.
4. **Batch Timings & Fees**: Edit rows in `batches: [...]`.
5. **Real Student Testimonials**: Replace placeholder reviews in `testimonials: [...]` with genuine student quotes.
6. **FAQs**: Add or update questions and answers in `faqs: [...]`.
7. **Blog Articles**: Add new educational articles in `blogPosts: [...]`.

---

## 📊 Connecting Google Sheets for Lead Collection

To have all demo class inquiries automatically saved into your personal Google Sheet:

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) and create a new spreadsheet named **"Creative English Leads"**.
2. In Row 1, add these column headers:
   - `A1`: **Timestamp**
   - `B1`: **Full Name**
   - `C1`: **Phone Number**
   - `D1`: **Course Interested**
   - `E1`: **Current Level**
   - `F1`: **Preferred Time**
   - `G1`: **Message**
   - `H1`: **Source**

### Step 2: Add Google Apps Script
1. Click **Extensions** > **Apps Script**.
2. Replace all code in the script editor with this snippet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.fullName || "",
      data.phone || "",
      data.courseInterested || "",
      data.currentLevel || "",
      data.preferredTime || "",
      data.message || "",
      data.source || "Website Demo Form"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy as Web App
1. Click **Deploy** > **New deployment**.
2. Choose **Web app**.
3. Set **Execute as**: *Me (your email)*.
4. Set **Who has access**: *Anyone*.
5. Click **Deploy** and copy the **Web app URL** (`https://script.google.com/macros/s/AKfycb.../exec`).

### Step 4: Configure in Environment File
Paste the URL into your `.env.local` file (or in Vercel Environment Variables):
```env
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

---

## 📧 (Optional) Email Notifications via Resend

To receive an instant email whenever a new lead arrives:
1. Create a free account at [Resend.com](https://resend.com).
2. Create an API Key.
3. In your `.env.local` add:
```env
RESEND_API_KEY=re_your_api_key_here
NOTIFICATION_EMAIL=creativeenglishambikapur@gmail.com
```

---

## 🚀 Deploying to Vercel (Zero Config)

1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com`
   - `GOOGLE_SHEET_WEBHOOK_URL`: *(Your Google Apps Script URL from above)*
   - `RESEND_API_KEY`: *(Optional)*
5. Click **Deploy**. Vercel will build and deploy the site in ~60 seconds.

### Connecting a Custom Domain on Vercel:
1. In your Vercel project dashboard, go to **Settings** > **Domains**.
2. Enter your custom domain (e.g. `creativeenglishambikapur.com`).
3. Set the provided `A` or `CNAME` records at your domain registrar (GoDaddy, Namecheap, Hostinger, etc.).

---

## 🏛️ Business NAP (Name, Address, Phone)

- **Business Name**: Creative English Spoken Center
- **Address**: Banaras Road, near Renuka Girls Hostel, Holy Cross College Road, Ambikapur, Chhattisgarh 497001, India
- **District**: Surguja
- **Phone / WhatsApp**: +91 73545 23597
- **Operating Hours**: Monday - Saturday: 7:00 AM - 8:00 PM | Sunday: 9:00 AM - 1:00 PM

---

## 🛡️ License
Private commercial software for Creative English Spoken Center. All rights reserved.
