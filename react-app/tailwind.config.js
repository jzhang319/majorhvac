/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        15: "3.75rem",
        30: "7.5rem",
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
    },
  },
  plugins: [],
};
