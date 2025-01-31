import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.mdx", "./public/**/*.svg"],
  theme: {
    extend: {
      boxShadow: {
        "code-shadow":
          "0 0 0 1px rgba(14, 22, 34, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        sans: "var(--font-geist-sans), system-ui, sans-serif",
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        "bg-primary": "#F7F7F8",
        "border-primary": "#D6DADE",
        "dark-primary": "#3C3C3F",
        "purple-primary": "#6C47FF",
        "purple-secondary": "#E6E2F9",
        "text-primary": colors.slate[900],
        "text-secondary": "#5E5F6E",
        "text-tertiary": "#A5AEB8",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
        h1: {
          colors: "text-secondary",
        },
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
