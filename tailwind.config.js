/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "full-layer": "#082032",
        "box-color": "#2C394B",
        "second-box-color": "#334756",
        "custom-text": "#FF4C29",
      },
    },
  },
  plugins: [],
};