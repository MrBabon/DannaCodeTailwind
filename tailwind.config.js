/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'navDanna': '#051a24',
        'bodyDanna': '#06373A',
        'fontDanna': '#1F5F5B',
        'font2Danna': '#159947',
        'flashDanna': '#4FF57B',
      },
      gridTemplateColumns:{
        "menu": "175px 1fr 175px"
      },
    },
  },
  plugins: [],
}

