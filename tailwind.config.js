/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFF9F0",
        deepNavy: "#151923",
        electricBlue: "#315CFF",
        cobalt: "#2447D8",
        coral: "#FF6B5E",
        orangeTech: "#FF9F43",
        mint: "#42D6A4",
        limeTech: "#B7E94C",
        lavender: "#A78BFA",
        softYellow: "#FFD95A",
        navyCard: "#172554"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "-apple-system", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"]
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #151923",
        brutalSm: "2px 2px 0px 0px #151923",
        brutalLg: "6px 6px 0px 0px #151923",
        brutalBlue: "4px 4px 0px 0px #315CFF",
        brutalCoral: "4px 4px 0px 0px #FF6B5E",
        brutalMint: "4px 4px 0px 0px #42D6A4",
        brutalYellow: "4px 4px 0px 0px #FFD95A",
        softGlow: "0 10px 30px -10px rgba(49, 92, 255, 0.2)"
      }
    }
  },
  plugins: []
};
