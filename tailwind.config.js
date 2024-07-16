/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0000FF",
        card: "#F1F5F6",
      },
    },
  },
  plugins: [],
};
