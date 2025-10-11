/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode toggle via 'class' on <html> or <body>
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#3b82f6", // Vibrant blue
          light: "#60a5fa",
          dark: "#1e40af",
        },
        background: {
          light: "#f9fafb",
          dark: "#0f172a",
        },
        surface: {
          light: "#ffffff",
          dark: "#1e293b",
        },
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
          dark: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(59,130,246,0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
