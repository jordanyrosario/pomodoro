module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
    variants: {
      backgroundColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd"
      ],
      borderColor: ["dark", "dark-focus", "dark-focus-within"],
      textColor: ["dark", "dark-hover", "dark-active"]
    },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
