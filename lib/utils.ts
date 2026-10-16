import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a WhatsApp chat URL with an encoded pre-filled message
 * @param phone Indian mobile number without + (e.g. 917354523597)
 * @param message Message to pre-fill in the chat
 */
export function getWhatsAppUrl(
  phone: string = "917354523597",
  message: string = "Hello! I want to know about the spoken English course at Creative English Spoken Center, Ambikapur."
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Formats a phone number for direct calling (tel: link)
 */
export function getTelUrl(phone: string = "+917354523597"): string {
  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  return `tel:${cleanPhone}`;
}
