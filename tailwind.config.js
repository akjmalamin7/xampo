/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customcolor:{
          100:"#ffffff",
          200:"#F8F8FB",
          300:"#74788D",
          400:"#516986",
          500:"#253642",
          600:"#0052CC",
          700: "#00AF70"
        },
      },
      fontSize: {
        12: "0.75rem", // 12px
        13: "0.8125rem", // 13px
        14: "0.875rem", // 14px
        15: "0.9375rem", // 15px
        16: "1rem", // 16px
        17: "1.0625rem", // 17px
        18: "1.125rem", // 18px
        20: "1.25rem", // 20px
        22: "1.375rem", // 22px
        24: "1.5rem", // 24px
        30: "1.875rem", // 30px
        32: "2rem", // 32px
        40:"2.5rem",//40px
        48: "3rem", // 48px
        51: "3.1875rem", // 51px
        64: "4rem", // 64px
      },
    },
  },
  plugins: [],
}

