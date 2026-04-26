/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
}
