"use client";

import React from "react";
import { siteConfig, FeatureItem, TimelineStep } from "@/data/siteConfig";
import {
  MessageSquare,
  Users,
  Presentation,
  HeartHandshake,
  Target,
  Clock,
  Search,
  Cpu,
  Repeat,
  Trophy,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface WhyUsSectionProps {
  onOpenDemoModal: () => void;
}

const featureIconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Presentation: <Presentation className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
};

const timelineIconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Repeat: <Repeat className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
};

export default function WhyUsSection({ onOpenDemoModal }: WhyUsSectionProps) {
  return (
    <section id="why-us" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part A: 6 Feature Cards */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy-50 text-brand-navy-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber-500" />
              The Creative English Advantage
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
              {siteConfig.whyChooseUs.heading}
            </h2>

            <p className="text-base sm:text-lg text-brand-text-muted">
              {siteConfig.whyChooseUs.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.features.map((feature: FeatureItem) => (
              <div
                key={feature.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center shadow-xs">
                      {featureIconMap[feature.icon] || <Sparkles className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-bold text-brand-amber-700 bg-brand-amber-50 border border-brand-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {feature.highlight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-brand-navy-900">
                      {feature.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-amber-700 mt-1">
                      {feature.hindiTitle}
                    </p>
                  </div>

                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B: Our Learning Method (4-Step Timeline) */}
        <div className="bg-brand-navy-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-amber-400 uppercase tracking-widest">
              Scientific Fluency Architecture
            </span>
            <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              Our 4-Step Learning Method
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              We guide you systematically from initial hesitation to confident stage presence in 60 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {siteConfig.whyChooseUs.timeline.map((step: TimelineStep, index: number) => (
              <div
                key={step.step}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-amber-500 text-brand-navy-950 flex items-center justify-center font-extrabold shadow-md">
                      {timelineIconMap[step.icon] || <Sparkles className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-amber-400 bg-brand-amber-500/20 px-2.5 py-1 rounded-md">
                      {step.duration}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Step 0{step.step}
                  </div>
                  <h4 className="text-xl font-heading font-extrabold text-white mt-1">
                    {step.title}
                  </h4>
                  <p className="text-xs font-semibold text-brand-amber-300 mt-0.5">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < 3 && (
                  <div className="hidden lg:flex items-center gap-1 text-slate-500 pt-4 text-xs font-semibold">
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-amber-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Callout inside Timeline */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <p className="text-base font-bold text-white">
                Want to know your current spoken English level?
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Take our free 15-minute diagnostic assessment at our Ambikapur center.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="px-6 py-3.5 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 font-extrabold text-sm shadow-amber transition-all transform active:scale-95 shrink-0 min-h-[44px]"
            >
              Book Free Assessment &amp; Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
