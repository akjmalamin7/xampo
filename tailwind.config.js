/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customcolor: {
          100: "#ffffff",
          150: "#F8F8FB",
          200: "#e5eefa",
          250: "#DBE9FD",
          300: "#74788D",
          350: "#D9D9D9",
          400: "#E1E1E1",
          450: "#516986",
          500: "#1B283A",
          550: "#516986",
          600: "#253642",
          650: "#1E266D",
          700: "#CCE0FF",
          750: "#0052CC",
          800: "#0052CC",
          850: "#0052cc0f",
          900: "#0052CC",
          950: "#00AF70",
          1000: "#00AF70",
          1050: "#00AF70",
          1100: "#00AF70",
          1150: "#0052cc1a",
          1200: "#0052cc1a",
          1250: "#f1b44c",
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
        36: "2.25rem", // 36px
        32: "2rem", // 32px
        40: "2.5rem", // 40px
        46: "2.875rem", // 46px
        48: "3rem", // 48px
        51: "3.1875rem", // 51px
        60: "3.75rem", // 60px
        64: "4rem", // 64px
      },
      fontWeight: {
        regular: 400,   
        medium: 500,    
        semiBold: 600,   
        bold: 700,    
      },
      boxShadow: {
        'custom-1': '0px 10px 20px 0px #12263F08',
        'custom-2': '0px 12px 24px 0px #12263F08'

      },
      textAlign: {
        left: "left",
        right: "right",
        center: "center",
      },
      screens: {
        'xs': '440px',
      },

    },
  },
  plugins: [],
};
