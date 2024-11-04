/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif",
        Quicksand: "' Quicksand', sans-serif"
      },
      colors: {
        "purple-btn": "rgb(255 144 232)",
        "red-btn": "#ff5252",
        "green-light": "#5cb377",
        "text-white": "#fff"
      }
    }
  },
  plugins: []
};
