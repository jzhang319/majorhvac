/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        35: "8.75rem",
        40: "10rem",
        50: "12.5rem",
        70: "17.5rem",
        90: "22.5rem",
        100: "25rem",
      },
      height: {
        15: "3.75rem",
        20: "5rem",
        35: "8.75rem",
        30: "7.5rem",
        40: "10rem",
        50: "12.5rem",
        "1/2-screen": "50vh",
      },
      padding: {
        25: "6.25rem",
        30: "7.5rem",
      },
      letterSpacing: {
        wider: "0.1em",
      },
      spacing: {
        30: "7.5rem",
        50: "12.5rem",
        70: "17.5rem",
        90: "22.5rem",
        100: "25rem",
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 320px and max-width: 767px) { ... }

        md: { min: "768px"},
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px" },
        // => @media (min-width: 1024px and up) { ... }
      },
    },
  },
  plugins: [],
};
