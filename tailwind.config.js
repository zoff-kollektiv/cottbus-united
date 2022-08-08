/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      violet: "#F8CAFF",
      red: "#FF0000",
      white: "#FFF",
      transparent: "transparent",
    },
    fontFamily: {
      infra: "Infra",
      barlow: "Barlow",
      barlowCondensed: "Barlow Condensed",
    },
    fontSize: {
      xs: "20px",
      sm: "24px",
      base: "30px",
      lg: "32px",
      xl: "50px",
      "2xl": "64px",
    },
    spacing: {
      0: 0,
      xs: "20px",
      sm: "32px",
      base: "49px",
      lg: "70px",
      xl: "80px",
      "2xl": "100px",
      "3xl": "160px",
    },
    screens: {
      md: "720px",
      lg: "1024px",
    },
    lineHeight: {
      tight: 1.2
    }
  },
  plugins: [],
};
