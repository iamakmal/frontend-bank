/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      main:'#DB0119',
      sub:'#6F6C90',
      black:'#171717',
      white:'#FFFFFF',
    },      
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake"],
  },
}