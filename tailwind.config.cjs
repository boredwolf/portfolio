/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        "light-red": "#fd466f",
        "light-violet": "#bc24b8",
        "dark-blue": "#185a9d",
        "blue-green": "#43cea2",
      },
    },
  },
  plugins: [],
};
