import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      coradion: ["var(--font-coradion)"],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-main)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
