/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "37.18rem",
      },
      height: {
        140: "52rem",
      },
    },
  },
  plugins: [],
};
