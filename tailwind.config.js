/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-top': 'rotateToTop 1s ease-in-out forwards',

      },
      keyframes: {
        rotateToTop: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-180deg)' },
        },

      },

      colors: {
          lightGray: '#A0A0A9',
          mediumGray: '#717179',
          darkGray : '#3F3F46',
          cardBackground:'#27272A',
          detailCardBackground:'#3F4045'
        },

    },
  },
  plugins: [],
}