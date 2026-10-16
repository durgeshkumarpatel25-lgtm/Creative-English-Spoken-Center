"use client";

import React, { useEffect, useState, useRef } from "react";
import { siteConfig, StatItem } from "@/data/siteConfig";
import { GraduationCap, Award, BookOpenCheck, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  BookOpenCheck: <BookOpenCheck className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

function CounterCard({ item }: { item: StatItem }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const target = item.numericValue;
          const duration = 1500; // ms
          const stepTime = 30; // ms
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [hasAnimated, item.numericValue]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center">
          {iconMap[item.icon] || <Award className="w-6 h-6" />}
        </div>
        <span className="text-[11px] font-bold text-brand-amber-700 bg-brand-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
          Verified
        </span>
      </div>

      <div>
        <div className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
          {hasAnimated ? count : 0}
          <span className="text-brand-amber-500">{item.suffix}</span>
        </div>
        <div className="text-sm font-bold text-slate-800 mt-1">
          {item.label}
        </div>
        <div className="text-xs text-slate-500 mt-1">
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="py-12 bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat) => (
            <CounterCard key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
