import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for enrolling at ${siteConfig.name}, Ambikapur, Chhattisgarh.`,
};

export default function TermsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-50 text-brand-navy-800 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-brand-amber-500" />
              Academic Guidelines &amp; Policies
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy-900">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-500">
              Effective for all student enrollments at {siteConfig.name}, Ambikapur
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                1. Free Demo Class Policy
              </h2>
              <p>
                Every prospective student is entitled to one (1) Free Demo Session subject to seat availability in their preferred time slot. Attending a demo session carries zero financial commitment or obligation to enroll.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                2. Enrollment and Fee Payments
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Seats in any batch are confirmed upon payment of the registration fee or 1st installment.</li>
                <li>Course fees are non-transferable between unrelated individuals.</li>
                <li>Installment dues must be cleared within the agreed schedule (typically by the 30th day of the course).</li>
                <li>Receipts are provided for all fees paid via cash, UPI, or bank transfer.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                3. Attendance &amp; Batch Discipline
              </h2>
              <p>
                Because spoken English fluency requires muscle memory and consistent speaking drills, regular attendance is vital. Students missing more than 3 consecutive classes without prior notification may be requested to join a backup revision session.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                4. Code of Conduct &amp; Mutual Respect
              </h2>
              <p>
                Creative English Spoken Center maintains an encouraging, non-judgmental environment. Bullying, laughing at peers making grammatical mistakes, or disruptive behavior is strictly prohibited and grounds for immediate termination without refund.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-brand-navy-900">
                5. Certification
              </h2>
              <p>
                Official Certificates of Completion are awarded to students who maintain at least 80% class attendance and complete their final stage presentation or mock interview assessment.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
