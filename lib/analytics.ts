declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispatches an event to GA4 and Meta Pixel if configured
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  try {
    if (typeof window !== "undefined") {
      // Google Analytics 4
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
      }
      // Meta Pixel
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", eventName, params);
      }
      // Console debug log for development
      if (process.env.NODE_ENV !== "production") {
        console.log(`[Analytics Event] ${eventName}:`, params);
      }
    }
  } catch (err) {
    console.error("Error dispatching analytics event:", err);
  }
}

export function trackWhatsAppClick(source: string, course?: string) {
  trackEvent("whatsapp_click", {
    source,
    course: course || "General Inquiry",
    value: 1,
  });
}

export function trackCallClick(source: string) {
  trackEvent("call_click", {
    source,
    value: 1,
  });
}

export function trackFormSubmit(course: string, preferredTime: string) {
  trackEvent("generate_lead", {
    course,
    preferred_time: preferredTime,
    value: 1,
    currency: "INR",
  });
}
