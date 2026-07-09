import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#070504",
          soft: "#0d0a08",
          raised: "#151009",
        },
        wood: {
          DEFAULT: "#2a1a10",
          dark: "#1a0f09",
          light: "#3f2415",
        },
        copper: {
          DEFAULT: "#b06a3a",
          bright: "#d98c52",
          dim: "#7a4324",
        },
        gold: {
          DEFAULT: "#caa354",
          bright: "#e8c580",
          dim: "#8a6a2c",
        },
        cream: {
          DEFAULT: "#f2ece0",
          dim: "#c9beac",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
