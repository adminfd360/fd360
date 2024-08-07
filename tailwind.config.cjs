/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fd360-bg": "url('./src/assets/fd360-background.jpg')",
      },
      boxShadow: {
        "3xl": "0 5px 50px -15px rgba(255,255,212,1)",
      },
      backdropBlur: {
        sm: "4px",
      },
      backgroundColor: (theme) => ({
        glass: "rgba(255, 255, 255, 0.4)",
      }),
    },
    fontFamily: {
      custom: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
