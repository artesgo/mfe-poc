/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apps/**/*.html", "./libs/**/*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["forest"],
  },
  plugins: [require("daisyui")],
}

