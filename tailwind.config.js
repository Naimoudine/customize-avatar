/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dev: "#0F7173",
        ops: "#F05D5E",
        design: "#FFBCB5",
      },
    },
  },
  plugins: [],
};
