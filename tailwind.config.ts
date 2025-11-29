import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#14213D", // Primary brand base
        teal: "#008787", // Hero + accents
        orange: "#FCA311", // CTA / highlight
        lightGray: "#F4F4F4", // Background / borders
        softGray: "#E5E7EB", // Secondary surfaces
        darkText: "#14213D", // Main text
        secondaryText: "#3B4A63", // Body text
        error: "#E63946", // Alert / error state
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        subtle: "0 1px 3px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
