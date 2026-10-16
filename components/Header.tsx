"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getTelUrl } from "@/lib/utils";
import { trackCallClick } from "@/lib/analytics";
import {
  Phone,
  CalendarCheck,
  Menu,
  X,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

interface HeaderProps {
  onOpenDemoModal: (preselectedCourse?: string) => void;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Why Us", href: "#why-us" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Batches & Fees", href: "#batches-fees" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export default function Header({ onOpenDemoModal }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky state and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = [
        "home",
        "courses",
        "why-us",
        "success-stories",
        "batches-fees",
        "faqs",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* 1. Top Notice & Quick Contact Strip */}
      <div className="bg-brand-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-brand-navy-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-brand-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber-400" />
              New Batches Starting Every Monday in Ambikapur!
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Near Renuka Girls Hostel, Holy Cross College Road
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Mon-Sat: 7:00 AM - 8:00 PM
            </span>
            <a
              href={getTelUrl(siteConfig.contact.phoneTel)}
              onClick={() => trackCallClick("Header Top Bar")}
              className="text-brand-amber-400 hover:text-white font-semibold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-soft py-3"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Mark + Title */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Creative English Spoken Center Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-navy-800 to-brand-navy-950 flex items-center justify-center text-brand-amber-400 font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
                CE
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-heading font-extrabold text-brand-navy-900 leading-tight group-hover:text-brand-navy-800 transition-colors">
                  Creative English
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-brand-text-muted">
                  Spoken Center • Ambikapur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? "text-brand-navy-800 bg-brand-navy-50 font-bold"
                        : "text-slate-600 hover:text-brand-navy-800 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Direct Call Button */}
              <a
                href={getTelUrl(siteConfig.contact.phoneTel)}
                onClick={() => trackCallClick("Header Desktop CTA")}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 text-brand-navy-900 hover:bg-slate-50 text-sm font-bold transition-all min-h-[44px]"
                aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-brand-navy-800" />
                <span className="hidden xl:inline">Call:</span>
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              {/* Book Free Demo Modal Trigger */}
              <button
                type="button"
                onClick={() => onOpenDemoModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 font-bold text-sm shadow-amber hover:shadow-card transition-all transform active:scale-95 min-h-[44px]"
              >
                <CalendarCheck className="w-4 h-4 text-brand-navy-950" />
                <span>Book Free Demo</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenDemoModal()}
                className="sm:hidden px-3 py-1.5 rounded-lg bg-brand-amber-500 text-brand-navy-950 text-xs font-bold"
              >
                Demo Class
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-brand-navy-900" />
                ) : (
                  <Menu className="w-6 h-6 text-brand-navy-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-navy-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-navy-800 text-brand-amber-400 font-extrabold flex items-center justify-center text-base">
                    CE
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-sm text-brand-navy-900">
                      Creative English
                    </p>
                    <p className="text-[10px] text-slate-500">Ambikapur</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 text-base font-semibold rounded-xl transition-colors min-h-[44px] flex items-center ${
                        isActive
                          ? "bg-brand-navy-50 text-brand-navy-800 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-amber-500 shrink-0" />
                  Banaras Road, near Renuka Girls Hostel, Ambikapur
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-amber-500 shrink-0" />
                  Mon - Sat: 7:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 font-bold text-base shadow-amber min-h-[44px]"
              >
                <CalendarCheck className="w-5 h-5 text-brand-navy-950" />
                Book Free Demo Class
              </button>

              <a
                href={getTelUrl(siteConfig.contact.phoneTel)}
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackCallClick("Mobile Menu Drawer");
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-slate-300 text-brand-navy-900 font-bold text-base hover:bg-slate-50 min-h-[44px]"
              >
                <Phone className="w-5 h-5 text-brand-navy-800" />
                Call +91 73545 23597
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
