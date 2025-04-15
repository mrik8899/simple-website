// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif']
        }
      },
    },
    plugins: [],
  };
  // tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  