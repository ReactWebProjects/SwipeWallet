/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'ridge': "url('/src/assets/ridgebackground.webp')",
    }
  },
  },
  plugins: [],
}
