/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        NavBarBlue: "#131921",
        SearchYellow: "#f3a847",
        AmazonOrange: "#f08804",
      },
    },
  },
  plugins: [],
};
