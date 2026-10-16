"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import { trackWhatsAppClick, trackCallClick } from "@/lib/analytics";
import {
  Phone,
  MessageSquare,
  CalendarCheck,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ConversionHelpersProps {
  onOpenDemoModal: () => void;
}

export default function ConversionHelpers({
  onOpenDemoModal,
}: ConversionHelpersProps) {
  const [showExitBanner, setShowExitBanner] = useState(false);

  // Timed / Exit intent popup (once per session)
  useEffect(() => {
    // Only execute in browser
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem("demo_banner_shown_v1");
    if (alreadyShown) return;

    // Timer fallback: Trigger after 25 seconds of reading
    const timer = setTimeout(() => {
      const shownNow = sessionStorage.getItem("demo_banner_shown_v1");
      if (!shownNow) {
        setShowExitBanner(true);
        sessionStorage.setItem("demo_banner_shown_v1", "true");
      }
    }, 25000);

    // Desktop exit-intent trigger (mouse leaving the top of the browser viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        const shownNow = sessionStorage.getItem("demo_banner_shown_v1");
        if (!shownNow) {
          setShowExitBanner(true);
          sessionStorage.setItem("demo_banner_shown_v1", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const defaultMsg =
    "Hello! I am visiting your website and would like to know about spoken English and demo classes at Creative English Spoken Center, Ambikapur.";

  return (
    <>
      {/* 1. Desktop Floating WhatsApp Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, defaultMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("Floating Desktop WhatsApp")}
          className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 pl-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with Creative English Counselor"
        >
          {/* Pulsing glow ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

          <MessageSquare className="w-6 h-6 fill-current relative z-10" />
          <span className="text-xs font-extrabold pr-1 relative z-10 hidden xl:inline">
            Chat with Counselor
          </span>
        </a>
      </div>

      {/* 2. Mobile Sticky Bottom Bar (Always visible on mobile screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Button */}
          <a
            href={getTelUrl(siteConfig.contact.phoneTel)}
            onClick={() => trackCallClick("Mobile Sticky Bar Call")}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold min-h-[44px] transition-colors"
            aria-label="Call Creative English Spoken Center"
          >
            <Phone className="w-4 h-4 text-brand-navy-800 mb-0.5" />
            <span>Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Mobile Sticky Bar WhatsApp")}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold min-h-[44px] shadow-xs transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Book Demo Modal Button */}
          <button
            type="button"
            onClick={onOpenDemoModal}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 text-[11px] font-extrabold min-h-[44px] shadow-amber transition-colors"
          >
            <CalendarCheck className="w-4 h-4 text-brand-navy-950 mb-0.5" />
            <span>Book Demo</span>
          </button>
        </div>
      </div>

      {/* 3. Exit Intent / Timed Special Offer Banner (Non-intrusive bottom banner) */}
      {showExitBanner && (
        <div className="fixed bottom-20 md:bottom-8 left-4 right-4 md:left-auto md:right-24 md:max-w-md z-50 animate-in slide-in-from-bottom duration-300">
          <div className="bg-brand-navy-950 text-white rounded-3xl p-5 shadow-2xl border-2 border-brand-amber-500 relative">
            <button
              type="button"
              onClick={() => setShowExitBanner(false)}
              className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-white min-h-[32px] min-w-[32px] flex items-center justify-center"
              aria-label="Close special offer banner"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3.5 pr-6">
              <div className="w-10 h-10 rounded-xl bg-brand-amber-500 text-brand-navy-950 flex items-center justify-center shrink-0 font-extrabold shadow-sm">
                <Sparkles className="w-5 h-5 text-brand-navy-950" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-brand-amber-400 uppercase tracking-widest block">
                  Special Ambikapur Offer
                </span>
                <h4 className="text-sm font-extrabold text-white">
                  Get a Free 1-on-1 English Level Assessment!
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Join our live demo batch this week at Banaras Road. Zero obligation, 100% free.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowExitBanner(false);
                  onOpenDemoModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all min-h-[40px]"
              >
                <span>Claim Free Demo Seat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
