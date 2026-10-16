import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for students and visitors of ${siteConfig.name}, Ambikapur, Chhattisgarh.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Simple Top Bar */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-brand-navy-900 hover:text-brand-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-semibold text-slate-500">
            {siteConfig.name}
          </span>
        </div>
      </header>

      <main className="flex-grow py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-8">
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Student Privacy Protection
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500">
              Last updated: October 2026 • Effective for {siteConfig.name}, Ambikapur
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                1. Information We Collect
              </h2>
              <p>
                When you fill out our Free Demo Class registration form, callback request, or contact us via WhatsApp, we collect information including your <strong>full name, phone number, course of interest, current English proficiency level, and preferred batch timings</strong>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                2. How We Use Your Information
              </h2>
              <p>We use this information exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schedule and confirm your Free Demo Class slot.</li>
                <li>Reach out via phone call or WhatsApp message regarding batch timings, fee structures, and study material.</li>
                <li>Maintain internal academic attendance and student progress records.</li>
              </ul>
              <p className="font-semibold text-brand-navy-900">
                We never sell, rent, or trade your personal contact details to any third-party marketing agencies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                3. Lead Storage and Security
              </h2>
              <p>
                Lead submissions are processed securely through encrypted SSL/TLS channels and stored in secure administrative spreadsheets accessible only to authorized institute counselors and management.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                4. Third-Party Links &amp; Analytics
              </h2>
              <p>
                Our website links to WhatsApp (Meta) for student support and embeds Google Maps for campus navigation. We also utilize privacy-respecting website analytics to monitor traffic. These services operate under their respective privacy policies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                5. Contact Us Regarding Your Data
              </h2>
              <p>
                If you wish to update your registered information or request deletion of your contact details from our records, please reach out to us at:
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                <p><strong>Institute:</strong> {siteConfig.name}</p>
                <p><strong>Address:</strong> {siteConfig.contact.address.fullAddress}</p>
                <p><strong>Phone / WhatsApp:</strong> {siteConfig.contact.phone}</p>
                <p><strong>Email:</strong> {siteConfig.contact.email}</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
