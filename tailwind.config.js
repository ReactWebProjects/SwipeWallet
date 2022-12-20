/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
        'crimson': ['Crimson Pro', 'serif'],
        'prompt': ['Prompt', 'sans-serif'],
        'rounded': ['Varela Round', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'mon': ['Montserrat', 'sans-serif'],
        'nun': ['Nunito','sans-serif'],
        'rob': ['Roboto Slab', 'serif']
    },
    extend: {
      backgroundImage: {
      'sale': "url('/src/assets/sale.jpg')",
    }
  },
  },
  plugins: [],
}
