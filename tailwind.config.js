/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
    colors: {
      lightBlue: "#5d3ebc",
      darkBlue: "#4c3398",
      biceBlue: "#2D6A8B",
      white: "#fff",
      black: "#000",
      yellow: "#ffd300"
    },
    screens: {
      ss: "340px",
      sm: "550px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      xl2: "1500px",
    },
  },
  plugins: [],
};