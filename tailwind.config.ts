import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B33A2E",
        secondary: "#5F6B4A",
        accent: "#E39B2B",
        cream: "#F5EFE4",
        carbon: "#2B2521",
        "primary-dark": "#922f24",
        "accent-dark": "#c8871f",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(43,37,33,0.55) 0%, rgba(43,37,33,0.3) 50%, rgba(43,37,33,0.7) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
