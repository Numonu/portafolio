/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : "#252237",
        light : "#f8ebf4",
        left : "#9d98f0",
        right : "#ccb1e1",
        orquidea : "#8e68f3"
      },
      fontFamily : {
        "futura" : "Futura"
      }
    },
  },
  plugins: [],
}
