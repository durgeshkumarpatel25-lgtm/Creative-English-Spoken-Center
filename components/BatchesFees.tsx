"use client";

import React from "react";
import { siteConfig, BatchItem } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldAlert,
} from "lucide-react";

interface BatchesFeesProps {
  onOpenDemoModal: (courseTitle?: string) => void;
}

export default function BatchesFees({ onOpenDemoModal }: BatchesFeesProps) {
  return (
    <section id="batches-fees" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy-50 text-brand-navy-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber-500" />
            Transparent &amp; Affordable Pricing
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
            Upcoming Batches &amp;{" "}
            <span className="text-brand-navy-800 underline decoration-brand-amber-500 decoration-wavy decoration-2">
              Fee Structure
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-text-muted">
            Flexible morning, evening, and weekend timings designed for college students, job aspirants, and working professionals in Ambikapur.
          </p>
        </div>

        {/* Desktop View: Responsive Table */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-navy-950 text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Course Program</th>
                <th className="py-4 px-6 font-bold">Duration</th>
                <th className="py-4 px-6 font-bold">Batch Timing (Mon-Sat)</th>
                <th className="py-4 px-6 font-bold">Fee Estimate</th>
                <th className="py-4 px-6 font-bold">Status</th>
                <th className="py-4 px-6 font-bold text-center">Enrollment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {siteConfig.batches.map((batch: BatchItem) => {
                const whatsappMsg = `Hello! I would like to enroll / enquire about the "${batch.courseTitle}" (${batch.batchTiming}) at Creative English Spoken Center Ambikapur.`;

                return (
                  <tr
                    key={batch.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-5 px-6">
                      <p className="font-bold text-brand-navy-900">
                        {batch.courseTitle}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {batch.recommendedFor}
                      </p>
                    </td>
                    <td className="py-5 px-6 font-semibold text-slate-700">
                      {batch.duration}
                    </td>
                    <td className="py-5 px-6 font-semibold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-amber-500 shrink-0" />
                        {batch.batchTiming}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-base font-extrabold text-brand-navy-900">
                        {batch.fee}
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        Installments available
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                          batch.status === "Filling Fast"
                            ? "bg-rose-50 text-rose-700 border border-rose-200"
                            : batch.status === "Weekend Only"
                            ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {batch.status}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => onOpenDemoModal(batch.courseTitle)}
                          className="px-3.5 py-2 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 text-xs font-extrabold shadow-xs transition-all min-h-[40px]"
                        >
                          Book Demo
                        </button>
                        <a
                          href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, whatsappMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick("Batches Table WhatsApp", batch.courseTitle)}
                          className="p-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                          aria-label={`Enquire on WhatsApp about ${batch.courseTitle}`}
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {siteConfig.batches.map((batch: BatchItem) => {
            const whatsappMsg = `Hello! I would like to enroll / enquire about the "${batch.courseTitle}" (${batch.batchTiming}) at Creative English Spoken Center Ambikapur.`;

            return (
              <div
                key={batch.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                        batch.status === "Filling Fast"
                          ? "bg-rose-50 text-rose-700"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {batch.status}
                    </span>
                    <span className="text-lg font-extrabold text-brand-navy-900">
                      {batch.fee}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-heading font-extrabold text-brand-navy-900">
                      {batch.courseTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {batch.recommendedFor}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-brand-amber-600 shrink-0" />
                      <span>{batch.batchTiming}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Calendar className="w-4 h-4 text-brand-navy-800 shrink-0" />
                      <span>Duration: {batch.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onOpenDemoModal(batch.courseTitle)}
                    className="py-2.5 px-3 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Free Demo</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("Batches Mobile WhatsApp", batch.courseTitle)}
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-brand-amber-500 shrink-0" />
            <span>
              <strong>Note:</strong> Fees and promotional discounts may vary based on ongoing student schemes. Call or WhatsApp for the latest offers.
            </span>
          </div>

          <a
            href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, "Hello! Please share latest fee discount offers for Ambikapur students.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Fee Discounts WhatsApp")}
            className="text-brand-navy-800 hover:text-brand-amber-600 font-bold shrink-0 flex items-center gap-1"
          >
            <span>Ask for Discount on WhatsApp</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
