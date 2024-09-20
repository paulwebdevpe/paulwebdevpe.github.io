/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../portfolio/**/*.{html,js}","./index.html",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 10s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
