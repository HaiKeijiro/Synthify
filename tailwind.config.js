/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      minHeight: {
        "section-height": "500px",
      },
    },
  },
  plugins: [],
};
