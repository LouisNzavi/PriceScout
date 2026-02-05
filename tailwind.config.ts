import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077FF",
          hover: "#0A84FF",
        },
        ink: "#1C1C1E",
        body: "#2C2C2E",
        neutral: {
          100: "#FFFFFF",
          50: "#F5F7FA",
        },
        divider: "#E5EAF0",
        success: "#34C759",
        warning: "#FF9F0A",
        destructive: "#FF3B30",
        "table-zebra": "#FAFCFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["28px", { lineHeight: "1.2" }],
        "h1-lg": ["32px", { lineHeight: "1.2" }],
        h2: ["22px", { lineHeight: "1.3" }],
        "h2-lg": ["24px", { lineHeight: "1.3" }],
        h3: ["16px", { lineHeight: "1.4" }],
        "h3-lg": ["18px", { lineHeight: "1.4" }],
      },
      boxShadow: {
        panel: "0 2px 12px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        panel: "12px",
        button: "8px",
      },
      spacing: {
        4.5: "1.125rem",
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
