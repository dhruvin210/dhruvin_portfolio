/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050816",
          900: "#0A0F1F",
          800: "#101827",
          700: "#161F33"
        },
        brand: {
          purple: "#8B5CF6",
          indigo: "#6366F1",
          cyan: "#06B6D4",
          pink: "#EC4899"
        }
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(139, 92, 246, 0.35)",
        glowCyan: "0 0 60px rgba(6, 182, 212, 0.32)",
        card: "0 24px 60px -20px rgba(2, 6, 23, 0.7)",
        ring: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px -30px rgba(99,102,241,0.4)"
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #06B6D4 100%)",
        "grad-soft": "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(6,182,212,0.18))",
        "grad-text": "linear-gradient(135deg,#C4B5FD 0%,#818CF8 40%,#22D3EE 100%)",
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        floatSlow: "float 11s ease-in-out infinite",
        spinSlow: "spin 22s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(-8px)" },
          "50%": { transform: "translateY(8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
