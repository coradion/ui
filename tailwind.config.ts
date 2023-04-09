import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-main)", "sans-serif"],
        coradion: ["var(--font-coradion)"],
      },
    },
  },
  plugins: [],
};

export default config;
