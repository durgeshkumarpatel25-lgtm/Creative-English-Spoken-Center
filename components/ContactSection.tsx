"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import { trackWhatsAppClick, trackCallClick } from "@/lib/analytics";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  Navigation,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const whatsappInquiryMsg = `Hello! I want to visit Creative English Spoken Center on Banaras Road, Ambikapur. Please guide me regarding location and available demo timings.`;

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy-50 text-brand-navy-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber-500" />
            Visit Our Ambikapur Institute
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
            Contact &amp;{" "}
            <span className="text-brand-navy-800 underline decoration-brand-amber-500 decoration-wavy decoration-2">
              Campus Location
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-text-muted">
            Conveniently situated on Banaras Road near Renuka Girls Hostel and Holy Cross College Road, Ambikapur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Details Cards & CTAs */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-navy-800" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-navy-900">
                    Institute Address
                  </h3>
                  <p className="text-xs font-semibold text-brand-amber-700 mt-0.5">
                    Landmark: {siteConfig.contact.address.landmark}
                  </p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {siteConfig.contact.address.fullAddress}
                  </p>
                </div>
              </div>

              {/* Get Directions Link Button */}
              <div className="pt-2">
                <a
                  href={siteConfig.contact.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold transition-colors shadow-xs min-h-[44px]"
                >
                  <Navigation className="w-4 h-4 text-brand-amber-400" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-navy-900">
                    Phone &amp; WhatsApp
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct inquiries &amp; batch registration
                  </p>
                  <p className="text-lg font-extrabold text-brand-navy-900 mt-0.5">
                    {siteConfig.contact.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={getTelUrl(siteConfig.contact.phoneTel)}
                  onClick={() => trackCallClick("Contact Section Phone")}
                  className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-brand-navy-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-brand-navy-800" />
                  <span>Call Directly</span>
                </a>

                <a
                  href={getWhatsAppUrl(siteConfig.contact.whatsappNumber, whatsappInquiryMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("Contact Section WhatsApp")}
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Timings & Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-brand-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="text-base font-bold text-brand-navy-900">
                    Center Timings
                  </h3>
                  {siteConfig.contact.openingHours.map((h, idx) => (
                    <div key={idx} className="text-slate-600">
                      <strong className="text-slate-800">{h.days}:</strong> {h.hours}
                    </div>
                  ))}
                  <div className="text-slate-500 pt-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{siteConfig.contact.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-slate-200 shadow-card overflow-hidden flex flex-col min-h-[400px]">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden bg-slate-100">
              <iframe
                title="Creative English Spoken Center Location Map Ambikapur"
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              />
              {/* Map Overlay Badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 text-xs text-brand-navy-900 font-bold flex items-center gap-2 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                <span>Creative English • Banaras Road</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
