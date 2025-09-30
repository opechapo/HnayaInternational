/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#3A1E78",
        "sky-blue": "#2CB5E8",
        "fresh-green": "#A5D63F",
      },
    },
  },
  plugins: [],
};
