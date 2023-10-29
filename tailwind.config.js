/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontSize: {
        xxs: "10px",
      },
      colors: {
        primary: "#d97706",
        paragraph: "#64748b",
        dark: "#0f172a",
        light: "#f1f5f9",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
};
