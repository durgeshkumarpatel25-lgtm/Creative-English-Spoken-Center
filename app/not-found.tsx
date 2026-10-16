import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, Home, BookOpen, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-amber-100 text-brand-amber-700 flex items-center justify-center mx-auto text-2xl font-extrabold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-navy-900">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-text-muted">
            The page you requested might have been moved, renamed, or does not exist.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            href="/"
            className="w-full py-3.5 px-4 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 font-bold text-sm shadow-amber flex items-center justify-center gap-2 transition-all min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#courses"
            className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors min-h-[44px]"
          >
            <BookOpen className="w-4 h-4 text-brand-navy-800" />
            <span>View All Courses</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          <p>Need urgent assistance?</p>
          <p className="font-semibold text-brand-navy-900 mt-0.5">
            Call or WhatsApp: {siteConfig.contact.phoneDisplay}
          </p>
        </div>
      </div>
    </div>
  );
}
