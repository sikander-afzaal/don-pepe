const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        btn: "#49434e",
        title: "#A1B86C",
        shadow: "#A8866D",
      },
      backgroundImage: {
        titleGr: "linear-gradient(315deg, #f2cf43 0%, #19a186 74%)",
      },
    },
  },
  plugins: [],
};
