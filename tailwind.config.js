/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:'white',
      none: "none"
    },
    borderWidth: {
      1: "1px",
    },
    fontFamily:{
      quicksnad: ['Quicksand','sans-serif'],
    },
    gridTemplateRows:{
      9:"repeat(2,minmax(0,1fr))",
      10:"repeat(2,minmax(0,1fr))"
    }
  },
  plugins: [],
}

