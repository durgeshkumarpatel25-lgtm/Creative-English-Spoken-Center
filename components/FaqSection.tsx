"use client";

import React, { useState } from "react";
import { siteConfig, FaqItem } from "@/data/siteConfig";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(siteConfig.faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy-50 text-brand-navy-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber-500" />
            Got Questions? We Have Answers
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
            Frequently Asked{" "}
            <span className="text-brand-navy-800 underline decoration-brand-amber-500 decoration-wavy decoration-2">
              Questions
            </span>
          </h2>

          <p className="text-base text-brand-text-muted">
            Everything you need to know about joining Creative English Spoken Center in Ambikapur.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-brand-navy-800 bg-slate-50/50 shadow-soft"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none min-h-[50px]"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        isOpen ? "text-brand-amber-500" : "text-slate-400"
                      }`}
                    />
                    <div>
                      <span className="text-base sm:text-lg font-heading font-bold text-brand-navy-900 block">
                        {faq.question}
                      </span>
                      {faq.hindiQuestion && (
                        <span className="text-xs font-semibold text-brand-amber-700 block mt-0.5">
                          {faq.hindiQuestion}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-brand-navy-900 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200/50"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-brand-navy-50 border border-brand-navy-100 space-y-3">
          <h3 className="text-lg font-bold text-brand-navy-900">
            Have a different question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our counselors are available on WhatsApp and phone to guide you regarding batches, syllabus, and course suitability.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hello! I have a question about Creative English Spoken Center Ambikapur."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold shadow-xs min-h-[44px]"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
