/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      minHeight: {
        "section-height": "570px",
      },
      colors: {
        "navy_blue": "#05204A"
      }
    },
  },
  plugins: [],
};
