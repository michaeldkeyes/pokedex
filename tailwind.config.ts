/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    colors: {
      grayscaleBackground: "#efefef",
      grayScaleDark: "#212121",
      grayscaleMedium: "#666666",
      red: "#dc0a2d",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "0.5rem",
      },
      spacing: {
        18: "4.5rem",
        minCalc: "calc(85.5% - 1rem)",
        widthCalc: "calc(100% - 1rem)",
      },
    },
  },
  plugins: [],
};
