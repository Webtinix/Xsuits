/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["xsuits-main/htdocs/main.in.php"],
  theme: {
    extend: {
      colors: {
        wx: "orange"
      },
      borderRadius: {
        wx: "20px"
      }
    },
  },
  plugins: [],
}