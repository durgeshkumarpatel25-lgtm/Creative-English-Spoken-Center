"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import { trackWhatsAppClick, trackCallClick } from "@/lib/analytics";
import {
  CalendarCheck,
  MessageSquare,
  Phone,
  Sparkles,
  CheckCircle2,
  Users,
  Mic,
  Star,
  Award,
} from "lucide-react";

interface HeroProps {
  onOpenDemoModal: () => void;
}

export default function Hero({ onOpenDemoModal }: HeroProps) {
  const defaultWhatsAppMsg = `Hello! I want to enquire about the spoken English and public speaking courses at Creative English Spoken Center, Ambikapur.`;

  return (
    <section
      id="home"
      className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-100/40 via-amber-100/30 to-purple-100/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Local Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy-50 border border-brand-navy-100 text-brand-navy-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{siteConfig.hero.badge}</span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="hidden sm:inline text-brand-amber-600 font-extrabold">Surguja District</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy-900 tracking-tight leading-[1.15]">
              Master Spoken English &amp;{" "}
              <span className="text-gradient-navy">Public Speaking</span> in{" "}
              <span className="relative whitespace-nowrap text-brand-navy-800">
                <span className="relative z-10">Ambikapur!</span>
                <span
                  className="absolute bottom-1 left-0 w-full h-3 bg-brand-amber-300/60 -rotate-1 rounded-sm -z-0"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Hindi / Hinglish Subtext for Local Relevance */}
            <p className="text-sm sm:text-base font-semibold text-brand-amber-700 bg-amber-50/70 border border-amber-200/60 rounded-xl py-2 px-3.5 inline-block">
              {siteConfig.hindiTagline}
            </p>

            {/* Comprehensive English Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-brand-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.subheadline}
            </p>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-brand-navy-900 pt-1">
              {siteConfig.hero.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Primary, Secondary & Tertiary */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              {/* Primary CTA: Book Free Demo */}
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 font-extrabold text-base shadow-amber hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 transition-all min-h-[50px]"
              >
                <CalendarCheck className="w-5 h-5 text-brand-navy-950" />
                <span>Book Free Demo Class</span>
              </button>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, defaultWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("Hero Secondary CTA")}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all min-h-[50px]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Tertiary CTA: Call Directly */}
              <a
                href={getTelUrl(siteConfig.contact.phoneTel)}
                onClick={() => trackCallClick("Hero Tertiary CTA")}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl border border-slate-300 hover:border-brand-navy-800 text-brand-navy-900 font-bold text-sm hover:bg-slate-50 transition-all min-h-[50px]"
                aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-brand-navy-800" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Micro Notice */}
            <div className="text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2 pt-1">
              <Award className="w-4 h-4 text-brand-amber-500" />
              <span>
                Located conveniently on <strong>Banaras Road, Holy Cross College Road</strong>, Ambikapur.
              </span>
            </div>
          </div>

          {/* Right Column: Visual Area with Floating Stat Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Main Visual Box */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3.5] rounded-3xl bg-gradient-to-tr from-brand-navy-900 to-brand-navy-800 p-2 shadow-2xl overflow-hidden border-4 border-white">
              {/* Illustration Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                <Image
                  src="/images/hero-illustration.svg"
                  alt="Students learning Spoken English and Public Speaking at Creative English Spoken Center Ambikapur"
                  fill
                  priority
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating Stat Card: Top Left */}
              <div className="absolute top-4 left-4 glass-card rounded-2xl p-3 shadow-card flex items-center gap-3 border border-white/80 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-brand-amber-500 text-brand-navy-950 flex items-center justify-center font-bold shadow-xs">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy-900">Daily Mic Practice</p>
                  <p className="text-[11px] text-slate-500">Stage Confidence</p>
                </div>
              </div>

              {/* Floating Stat Card: Bottom Right */}
              <div className="absolute bottom-4 right-4 glass-card rounded-2xl p-3 shadow-card flex items-center gap-3 border border-white/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-xs">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy-900">4.9 / 5.0 Rating</p>
                  <p className="text-[11px] text-slate-500">500+ Ambikapur Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
