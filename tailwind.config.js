/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#4485FD",
      "secondary-900": "#24345D",
      "secondary-800": "#ECF4FF",
      "secondary-700": "#EBF3FE",
      "secondary-600": "#9ED1FE",
      "secondary-500": "#F4FDFF",
      "text-800": "#689CFD",
      "text-700": "#151411",
      "text-600": "#5A6FA0",
      "text-500": "#7889B2",
      "text-400": "#373F41",
      "gradient-500": "linear-gradient(96.45deg, #4485FD 0%, #1A4187 99%)",
      "stroke-500": "#A9C5DE",
      "gray-500": "#F8FBFF",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Cabinet Grotesk", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-600":
          "linear-gradient(97.43deg, #4485FD -3.02%, #1A4187 108.35%)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
