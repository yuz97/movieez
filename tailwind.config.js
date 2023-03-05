/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "2rem",
         },
         fontFamily: {
            poppins: ["poppins", "sans-serif"],
         },
         colors: {
            black: "rgb(13 36 56)",
         },
      },
   },
   plugins: [],
   darkMode: "class",
};
