/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gardening: {
          "green-100": "#516F59",
          "white-100": "#ECECEC",
          "tan-100": "#F4F2E2",
          "tan-200": "#C0BDA5",
          "red-100": "#C78E7C",
          "red-200": "#B47D6B",
          "yellow-100": "#D9B761",
          "yellow-200": "#C5A040",
          "blue-100": "#3E3E3E",
          "brown-100": "#3E2913",
          "brown-200": "#83694D",
          "brown-300": "#977761",
          "brown-400": "#AF907A",
          "brown-500": "#5E534D",
          "yellow-100": "#d9b761",
        },
      },
    },
  },
  plugins: [],
};
