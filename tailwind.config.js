/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientMove: "gradientMove 12s ease infinite",
      },
      backgroundSize: {
        "200": "200% 200%",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(270deg, #93c5fd, #60a5fa, #3b82f6, #2563eb)", 
      },
    },
  },
  plugins: [],
}