/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#800000",
          light: "#B22222", 
          dark: "#4B0000",
        },
        secondary: {
          DEFAULT: "#0A1F44",
          light: "#274472",
          dark: "#000B22",
        },
        background: "#F9F8F7",
        surface: "#FFFFFF",
        text: {
          primary: "#1A1A1A",
          secondary: "#666666", 
          disabled: "#C1C1C1",
          white: "#FFFFFF",
        },
        success: "#2F855A",
        warning: "#C05621",
        error: "#C53030",
        border: "#8C8C8C",
      },
      boxShadow: {
        custom: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem", 
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        xxl: "4rem",
      },
      fontSize: {
        h1: "3.5rem",
        h2: "2.5rem", 
        h3: "1.875rem",
        h4: "1.5rem",
        body: "1rem",
        small: "0.875rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(12px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 10s ease-in-out infinite",
        "pulse-soft": "pulseSoft 7s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        gradient: "gradient 14s ease infinite",
      },
    },
  },
  plugins: [],
}
