/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purpleDark': "#800080",
        'purpleLight': "#FF864C",
        'grayLight': "#D9D9D9",
      },
      boxShadow: {
        'custom': '0px 3px 100px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}