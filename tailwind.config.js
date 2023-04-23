/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

