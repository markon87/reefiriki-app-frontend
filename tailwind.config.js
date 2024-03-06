/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      colors: {
        highlight: "#e65c3d",
      },
      fontFamily: {
        body: ["Lato"],
        title: ["Lobster"],
      },
      backgroundImage: {
        heroImage: "url(./images/ReefirikiHeroBg.jpg)",
      },
      backgroundPosition: {
        "hero-offset-r-50": "top right 50%",
      },
    },
  },
  plugins: [],
};
