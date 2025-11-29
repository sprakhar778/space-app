/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shuttleFly: {
          "0%": {
            transform: "translateX(150%) translateY(10px) rotate(5deg)",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "100%": {
            transform: "translateX(-400%) translateY(-30px) rotate(-2deg)",
            opacity: 1,
          },
        },
      },
      animation: {
        shuttleFly: "shuttleFly 20s linear infinite",
      },
      colors: {
        navyish: "#000417",
      },
    },
  },
  plugins: [],
};
