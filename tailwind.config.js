/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FF2A2A",
          redhover: "#D91B1B",
          dark: "#0a0a0a",
          card: "#141414",
          gray: "#b0b0b0"
        }
      },

      // ✅ ADD THIS (don’t remove anything above)
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },

    },
  },
  plugins: [],
}