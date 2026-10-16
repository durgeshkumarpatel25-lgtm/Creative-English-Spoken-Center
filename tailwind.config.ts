import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            50: "#EEF2F6",
            100: "#DCE5EE",
            200: "#B8CBDE",
            300: "#8FAECB",
            400: "#5D8DB7",
            500: "#2B6CA3",
            600: "#1E5285",
            700: "#1B436D",
            800: "#1E3A8A", // Primary Deep Navy
            900: "#0F172A", // Dark Slate Text/Bg
            950: "#0A0F1D",
          },
          amber: {
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#FCD34D",
            400: "#FBBF24",
            500: "#F59E0B", // Primary Accent / CTA
            600: "#D97706", // Hover Accent
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
          },
          surface: {
            white: "#FFFFFF",
            slate: "#F8FAFC",
            card: "#FFFFFF",
            muted: "#F1F5F9",
          },
          text: {
            main: "#0F172A",
            muted: "#475569",
            light: "#94A3B8",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.03)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 20px 30px -8px rgba(30, 58, 138, 0.12), 0 8px 12px -4px rgba(30, 58, 138, 0.08)",
        amber: "0 10px 25px -5px rgba(245, 158, 11, 0.35)",
        navy: "0 10px 25px -5px rgba(30, 58, 138, 0.35)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
