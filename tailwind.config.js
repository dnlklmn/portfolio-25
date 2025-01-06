/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    semanticColors: {
      primary: {
        light: {
          bg: colors.neutral[100],
          txt: colors.neutral[900],
        },
        dark: {
          bg: colors.neutral[900],
          txt: colors.neutral[200],
        },
      },
      inverted: {
        light: {
          bg: colors.neutral[900],
          txt: colors.neutral[100],
        },
        dark: {
          bg: colors.neutral[200],
          txt: colors.neutral[900],
        },
      },
      secondary: {
        light: {
          bg: colors.neutral[500],
        },
        dark: {
          bg: colors.neutral[700],
        },
      },
    },
    extend: {
      colors: {
        white: "#ffffff",
      },
      fontFamily: {
        Franklin: ["Libre Franklin", "sans-serif"],
        Gentium: ["Gentium Book Plus", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-semantic-colors"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".writing-mode-horizontal-tb": {
          "writing-mode": "horizontal-tb",
        },
        ".writing-mode-vertical-rl": {
          "writing-mode": "vertical-rl",
        },
        ".writing-mode-vertical-lr": {
          "writing-mode": "vertical-lr",
        },
        ".writing-mode-sideways-rl": {
          "writing-mode": "sideways-rl",
        },
        ".writing-mode-sideways-lr": {
          "writing-mode": "sideways-lr",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
