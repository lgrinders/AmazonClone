/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        NavBarBlue: "#131921",
        SearchYellow: "#f3a847",
        AmazonOrange: "#f08804",
        LightCyan: "#e7f4f5",
        SecondaryNavBarBlue: "#232f3e",
        cartYellow: "#f8d432",
        cartYellowHover: "#f7ca00",
      },
    },
  },
  plugins: [],
};
