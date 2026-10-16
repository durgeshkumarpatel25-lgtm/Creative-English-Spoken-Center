"use client";

import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import FreeDemoSection from "./FreeDemoSection";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export default function DemoModal({
  isOpen,
  onClose,
  preselectedCourse,
}: DemoModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/75 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
          aria-label="Close demo booking modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-amber-100 text-brand-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber-600" />
            100% Free Demo Class
          </div>
          <h2
            id="modal-headline"
            className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-navy-900"
          >
            Reserve Your Free Demo Seat
          </h2>
          <p className="text-sm text-brand-text-muted mt-1">
            Join a live session at Banaras Road, Ambikapur. No upfront payment or commitment.
          </p>
        </div>

        {/* Embedded Demo Form */}
        <FreeDemoSection
          isModal={true}
          preselectedCourse={preselectedCourse}
          onSuccessClose={onClose}
        />
      </div>
    </div>
  );
}
