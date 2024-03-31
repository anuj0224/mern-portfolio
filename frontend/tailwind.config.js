/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#d5dae8",
        "secondary":"#F97316",
        "tertiary" : "#3E57D0",
      }
    },
    screens: {
      'lg': {'max': '2023px'},

      'sm': {'max': '1000px'},
    },
  },
  plugins: [],
}
