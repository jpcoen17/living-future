import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#06070A",
        "bg-secondary": "#0D1117",
        gold: "#D6A85F",
        "gold-light": "#E8C07A",
        "gold-dark": "#B8893A",
        "soft-white": "#F5F5F5",
        emerald: "#0E8F74",
        "emerald-glow": "#16B896",
        "card-bg": "#0F1318",
        "border-subtle": "#1E2530",
      },
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        number: ["'Satoshi'", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D6A85F 0%, #E8C07A 50%, #B8893A 100%)",
        "dark-gradient": "linear-gradient(180deg, #06070A 0%, #0D1117 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(13,17,23,0.9) 0%, rgba(6,7,10,0.95) 100%)",
        "glow-gold": "radial-gradient(ellipse at center, rgba(214,168,95,0.15) 0%, transparent 70%)",
        "glow-emerald": "radial-gradient(ellipse at center, rgba(14,143,116,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "gold": "0 0 30px rgba(214,168,95,0.3)",
        "gold-sm": "0 0 15px rgba(214,168,95,0.2)",
        "emerald": "0 0 30px rgba(14,143,116,0.3)",
        "card": "0 20px 60px rgba(0,0,0,0.5)",
        "glass": "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
