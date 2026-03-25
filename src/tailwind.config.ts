import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        orange: "#FF6B35",
        electric: "#00A6C4",
        "off-white": "#F9F9F9",
        "dark-slate": "#1E2A3A",
      },
      fontFamily: {
        body: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-barlow)", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;