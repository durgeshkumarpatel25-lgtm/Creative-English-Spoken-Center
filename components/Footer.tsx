"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Sparkles,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-navy-950 text-slate-300 pt-16 pb-28 md:pb-16 border-t border-brand-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & NAP Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy-800 to-brand-navy-700 flex items-center justify-center text-brand-amber-400 font-extrabold text-xl shadow-md">
                CE
              </div>
              <div>
                <span className="text-xl font-heading font-extrabold text-white block">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-brand-amber-400 font-medium">
                  Spoken English &amp; Public Speaking Institute • Ambikapur
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Building rock-solid English speaking confidence, fluent pronunciation, and interview-ready skills for students, job seekers, and working professionals in Surguja district.
            </p>

            <p className="text-xs text-brand-amber-300 font-semibold italic">
              {siteConfig.hindiTagline}
            </p>

            {/* Quick NAP */}
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <a
                  href={getTelUrl(siteConfig.contact.phoneTel)}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <span>Mon - Sat: 7:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-brand-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-amber-400 transition-colors">
                  All Courses
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-brand-amber-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#batches-fees" className="hover:text-brand-amber-400 transition-colors">
                  Batches &amp; Fees
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-amber-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-amber-400 transition-colors">
                  Fluency Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.courses.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <a
                    href="#courses"
                    className="hover:text-brand-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{c.title}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-brand-amber-400">
                      {c.duration}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Us Fast (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Direct Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl(
                  siteConfig.contact.whatsappNumber,
                  "Hello! I am contacting you from the Creative English website."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getTelUrl(siteConfig.contact.phoneTel)}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
              >
                <Phone className="w-4 h-4 text-brand-amber-400" />
                <span>Call Center</span>
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs transition-colors mt-2"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-brand-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}, Ambikapur, Chhattisgarh. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link
              href="/blog"
              className="hover:text-slate-300 transition-colors"
            >
              Articles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
