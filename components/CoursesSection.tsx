"use client";

import React, { useState } from "react";
import { siteConfig, Course } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  Sparkles,
  Flame,
  Mic,
  UserCheck,
  Briefcase,
  Smile,
  BookOpen,
  Building2,
  Clock,
  Target,
  CheckCircle2,
  MessageSquare,
  CalendarCheck,
} from "lucide-react";

interface CoursesSectionProps {
  onOpenDemoModal: (courseTitle?: string) => void;
}

const courseIconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
};

export default function CoursesSection({ onOpenDemoModal }: CoursesSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Beginner", "Intermediate", "All Levels", "Advanced"];

  const filteredCourses =
    selectedFilter === "All"
      ? siteConfig.courses
      : siteConfig.courses.filter((c) => c.level === selectedFilter);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy-50 text-brand-navy-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber-500" />
            Curriculum Tailored for Surguja Learners
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
            Our Spoken English &amp;{" "}
            <span className="text-brand-navy-800 underline decoration-brand-amber-500 decoration-wavy decoration-2">
              Personality Programs
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-text-muted">
            From complete Hindi-to-English beginners to corporate professionals and exam aspirants — find the exact course to achieve your speaking goals.
          </p>

          {/* Level Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[40px] ${
                  selectedFilter === cat
                    ? "bg-brand-navy-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? "All Programs (8)" : `${cat} Level`}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: Course) => {
            const courseWhatsAppMessage = `Hello! I want to enquire about the "${course.title}" course at Creative English Spoken Center, Ambikapur. Please share batch timings and admission details.`;

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Card Header: Icon, Badge & Duration */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center group-hover:bg-brand-amber-500 group-hover:text-brand-navy-950 transition-colors shadow-xs">
                      {courseIconMap[course.icon] || <Sparkles className="w-5 h-5" />}
                    </div>

                    <div className="flex items-center gap-2">
                      {course.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-brand-amber-100 text-brand-amber-800 border border-brand-amber-200">
                          {course.badge}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Course Title & Hindi Subtitle */}
                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-brand-navy-900 group-hover:text-brand-navy-800 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-amber-700 mt-1">
                      {course.hindiTitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-brand-text-muted leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Who It Is For Box */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                    <span className="font-bold text-brand-navy-900 flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-brand-amber-600" />
                      Who it is for:
                    </span>
                    <p className="text-slate-600 text-[12px]">{course.targetAudience}</p>
                  </div>

                  {/* Key Learning Outcomes */}
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-extrabold text-brand-navy-900 uppercase tracking-wider">
                      Key Outcomes:
                    </p>
                    <ul className="space-y-2">
                      {course.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Action Buttons */}
                <div className="p-6 pt-0 space-y-2.5 border-t border-slate-100/80 mt-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2">
                    <span>
                      Timings: <strong className="text-slate-700">{course.timings}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Free Demo Trigger for this course */}
                    <button
                      type="button"
                      onClick={() => onOpenDemoModal(course.title)}
                      className="w-full py-2.5 px-3 rounded-xl bg-brand-navy-50 hover:bg-brand-navy-100 text-brand-navy-900 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>Book Demo</span>
                    </button>

                    {/* Pre-filled WhatsApp Enquiry */}
                    <a
                      href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, courseWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("Course Card WhatsApp", course.title)}
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs min-h-[44px]"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
