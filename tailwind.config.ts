import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        laub: {
          50: "#EDF3EB",
          100: "#D2E0CE",
          200: "#A6C09F",
          300: "#7A9F71",
          400: "#4F7B46",
          500: "#2E5A29",
          600: "#244A21",
          700: "#1C3B1A",
          800: "#152D14",
          900: "#0E1F0D"
        },
        erde: {
          50: "#FAF5E9",
          100: "#F1E4C6",
          200: "#E3CA92",
          300: "#D4B068",
          400: "#C59A4B",
          500: "#A67E37",
          600: "#85642B",
          700: "#644B21",
          800: "#463418",
          900: "#2D220F"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
