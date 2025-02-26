import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        f11: [
          "0.6875rem",
          { lineHeight: "0.6875rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        f12: [
          "0.75rem",
          { lineHeight: "0.75rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        f14: [
          "0.875rem",
          { lineHeight: "0.875rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        f16: [
          "1rem",
          { lineHeight: "1rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        f18: [
          "1.125rem",
          { lineHeight: "1.125rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        f20: [
          "1.25rem",
          { lineHeight: "1.25rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        f24: [
          "1.5rem",
          { lineHeight: "1.5rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        f26: [
          "1.625rem",
          { lineHeight: "1.625rem", letterSpacing: "0%", fontWeight: "600" },
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "core", // prefix for themes variables
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          extend: "light",
          layout: {},
          colors: {
            secondary: {
              DEFAULT: "#539bff",
            },
            background: {
              DEFAULT: "#FFFFFF",
              foreground: "#F1EFF9",
            },
            content1: {
              DEFAULT: "#171A1C",
            },
          },
        },
        dark: {
          extend: "dark",
          layout: {},
          colors: {
            secondary: {
              DEFAULT: "#539bff",
            },
            background: {
              DEFAULT: "#1C1A27",
              foreground: "#322E40",
            },
            content1: {
              DEFAULT: "#FCFBFC",
            },
          },
        },
      },
    }),
  ],
};
