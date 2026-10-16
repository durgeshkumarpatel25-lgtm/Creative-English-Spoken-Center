"use client";

import React, { useState } from "react";
import { siteConfig, Testimonial } from "@/data/siteConfig";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Info,
} from "lucide-react";

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = siteConfig.testimonials;
  const total = testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Real Student Transformations
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
              Stories of Fluency &amp;{" "}
              <span className="text-brand-navy-800 underline decoration-brand-amber-500 decoration-wavy decoration-2">
                Unstoppable Confidence
              </span>
            </h2>

            <p className="text-base text-brand-text-muted">
              Discover how students, job seekers, and working professionals from Ambikapur and Surguja overcame stage fear and transformed their communication.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-2xl bg-brand-navy-900 text-white hover:bg-brand-navy-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t: Testimonial, idx: number) => {
            const isFeatured = idx === currentIndex;
            return (
              <div
                key={t.id}
                className={`bg-slate-50/70 rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isFeatured
                    ? "border-brand-amber-500 shadow-card bg-white ring-2 ring-brand-amber-400/20"
                    : "border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                {/* Quote Icon Background */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200/70 -rotate-12 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-brand-amber-500 text-brand-amber-500"
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-600 ml-1.5">
                      5.0
                    </span>
                  </div>

                  {/* Hindi Highlight if available */}
                  {t.hindiQuote && (
                    <p className="text-xs font-bold text-brand-amber-800 bg-brand-amber-50/80 px-2.5 py-1 rounded-lg border border-brand-amber-200/50 inline-block">
                      &ldquo;{t.hindiQuote}&rdquo;
                    </p>
                  )}

                  {/* Main Quote */}
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Student Profile Info */}
                <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-navy-800 to-brand-navy-950 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {t.avatarPlaceholder}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy-900 flex items-center gap-1">
                        {t.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-brand-navy-800 bg-brand-navy-50 px-2 py-0.5 rounded-md">
                    {t.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Transparency Note for Client / Visitors */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-brand-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Note for Institute Admin:</strong> The student reviews above are illustrative sample placeholders formatted in{" "}
            <code className="bg-amber-100 px-1 py-0.5 rounded text-[11px] font-mono">
              /data/siteConfig.ts
            </code>
            . You can easily add your actual student names, verified video links, and feedback photos at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
