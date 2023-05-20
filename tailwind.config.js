/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      header: "40px",
    },

    extend: {
      colors: {
        "header-black": "#212121",
      },
    },
  },
  plugins: [],
};
