/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: {
              DEFAULT: '#7e6514', // yellow-900
            },
            secondary: {
              DEFAULT: '#4b5563', // gray-600
            },
          },
    },
  },
  plugins: [],
}