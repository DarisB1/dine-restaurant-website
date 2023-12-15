/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile":
          "url('hero-bg-mobile.jpg')"
      },
      FontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      fontWeight: {
        "extra-light": 200,
        "light": 300,
        "normal": 400,
        "medium": 500,
        "semibold": 600,
        "bold": 700,
      },
    },
  },
  plugins: [],
}

