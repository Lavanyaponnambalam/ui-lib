import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Path to your components
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-4px)" },
          "100%": { transform: "translateX(4px)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.8)" },
        },
        slideTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideBottom: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        shake: "shake 0.5s ease-in-out infinite",
        scaleUp: "scaleUp 0.5s ease-in-out",
        scaleDown: "scaleDown 0.5s ease-in-out",
        slideTop: "slideTop 0.5s ease-in-out",
        slideBottom: "slideBottom 0.5s ease-in-out",
        slideLeft: "slideLeft 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-in-out",
      },
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
