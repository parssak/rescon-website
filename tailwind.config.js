const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ruda", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        offblack: "#222222",
        accent: {
          darkest: "#036098",
          dark: "#04529c",
          grad: "#006098",
          DEFAULT: "#0080cb",
          hover: "#365AB9",
          light: "#b19d32",
          light_hover: "#d2c060",
          lightest: "#f2f2f2", 
        },
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
