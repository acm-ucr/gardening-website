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
          "tan-100": "#F4F2E2",
          "tan-200": "#C0BDA5",
          "red-100": "#C78E7C",
          "red-200": "#B47D6B",
          "brown-100": "#3E2913",
          "yellow-100": "#D9B761",
          "yellow-200": "#C5A040",
          "blue-100": "#3E3E3E",
        },
      },
    },
  },
  plugins: [],
};
