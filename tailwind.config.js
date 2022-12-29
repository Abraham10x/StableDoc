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
      "secondary-400": "#E3E3E3",
      "text-800": "#689CFD",
      "text-700": "#151411",
      "text-600": "#5A6FA0",
      "text-500": "#7889B2",
      "text-400": "#373F41",
      "text-300": "#465371",
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
        "gradient-700":
          "linear-gradient(174.31deg, rgba(60, 64, 66, 0.2) 57.42%, rgba(133, 137, 138, 0) 95.47%)",
        "team-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))",
        "step-card":
          "linear-gradient(152.47deg, #E8F3FE 0%, rgba(227, 241, 255, 0.22) 98.37%);",
        "hero-bg": "url('/img/general/hero-circle.svg')",
        "social-bg": "url('/img/support/social-bg.svg')",
        "beneficts-bg": "url('/img/home/beneficts-bg.svg')",
        "download-bg": "url('/img/home/download-bg.svg')",
        "client-bg": "url('/img/home/testimonial-bg.svg')",
        "SDT-hero": "url('/img/sdt/sdt-bg.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
