/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Dark mode colors (original)
        primary: {
          dark: "#010101",
          light: "#ffffff"
        },
        secondary: {
          dark: "#bdbebe",
          light: "#333333"
        },
        tertiary: {
          dark: "#1a1463",
          light: "#3a2ebb"
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "bg-primary": {
          dark: "#010101",
          light: "#f5f5f5"
        },
        "text-primary": {
          dark: "#ffffff",
          light: "#121212"
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.svg')",
      },
    },
  },
  plugins: [],
};
