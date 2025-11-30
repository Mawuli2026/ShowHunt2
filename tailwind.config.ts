import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        navy: "#14213D",
        teal: "#008787",
        orange: "#FCA311",

        // Neutral Palette
        lightGray: "#F4F4F4",
        softGray: "#E5E7EB",
        darkText: "#14213D",
        secondaryText: "#3B4A63",

        // Feedback States
        success: "#10B981",
        warning: "#F59E0B",
        info: "#3B82F6",
        error: "#E63946",

        // Extended Variants
        "navy-light": "#1E2A47",
        "navy-lighter": "#2A3A52",
        "teal-dark": "#006B6B",
        "teal-light": "#00A3A3",
        "orange-dark": "#E08D0A",
        "orange-light": "#FDB83D",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
      },

      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
      },

      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        subtle: "0 1px 3px rgba(0, 0, 0, 0.06)",
        hover: "0 4px 12px rgba(0, 0, 0, 0.12)",
        elevated: "0 8px 16px rgba(0, 0, 0, 0.15)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.12)",
      },

      spacing: {
        section: "3rem",
        "section-lg": "4rem",
      },

      borderRadius: {
        sm: "4px",
        base: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        full: "9999px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        250: "250ms",
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Primary Button
        ".btn-primary": {
          "@apply px-6 py-3 bg-orange text-navy font-semibold rounded-lg hover:bg-orange-dark transition-all duration-250 shadow-card hover:shadow-hover active:scale-95":
            {},
        },

        // Secondary Button
        ".btn-secondary": {
          "@apply px-6 py-3 bg-white border-2 border-navy text-navy font-semibold rounded-lg hover:bg-lightGray hover:border-teal transition-all duration-250 shadow-subtle":
            {},
        },

        // Tertiary Button (Text only)
        ".btn-tertiary": {
          "@apply px-6 py-3 text-navy font-semibold hover:text-teal transition-colors duration-250":
            {},
        },

        // Section Padding
        ".section-padding": {
          "@apply py-12 md:py-16 lg:py-20": {},
        },

        // Container
        ".container-custom": {
          "@apply w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8": {},
        },

        // Card Base
        ".card-base": {
          "@apply bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250": {},
        },

        // Product Card
        ".product-card": {
          "@apply card-base overflow-hidden group cursor-pointer": {},
        },

        // Header Base
        ".header-base": {
          "@apply bg-navy text-white": {},
        },

        // Text Gradient (for hero highlights)
        ".text-gradient": {
          "@apply bg-gradient-to-r from-teal to-orange bg-clip-text text-transparent": {},
        },

        // Focus Ring (accessibility)
        ".focus-ring": {
          "@apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal": {},
        },

        // Link Hover
        ".link-hover": {
          "@apply text-teal hover:text-orange transition-colors duration-250": {},
        },
      });
    },
  ],
};

export default config;
