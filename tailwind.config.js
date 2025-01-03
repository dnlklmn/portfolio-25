/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Franklin: ["Libre Franklin", "sans-serif"],
        Gentium: ["Gentium Book Plus", "sans-serif"],
      },
    },
  },
  plugins: [
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
