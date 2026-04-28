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
        // Industrial response palette
        bg: "#0E0E10",
        "bg-soft": "#F6F5F1",
        ink: "#0E0E10",
        "ink-soft": "#F6F5F1",
        accent: "#FF3B1F",
        "accent-secondary": "#E8E3D6",
        success: "#1F6F4E",

        // Aliases used by older shadcn-style refs
        background: "#0E0E10",
        foreground: "#F6F5F1",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      borderRadius: {
        card: "2px",
        none: "0",
      },
    },
  },
  plugins: [],
};
export default config;
