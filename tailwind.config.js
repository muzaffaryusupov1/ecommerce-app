/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'bg-light-2': '#f4f4f4',
        'bg-light-1': '#fff',
        'black-100': '#272727',
        'black-50': 'rgba(39, 39, 39, 0.5)',
        'white-100': '#fff',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'primary-100': '#8e6cef',
        'primary-50': '#efeaf5',
        'other-colors-lemon': '#b3b68b',
        'other-colors-red': '#fa3636',
        'other-colors-blue': '#4468e5',
        'other-colors-yellow': '#f4bd2f',
        'other-colors-green': '#5fb567',
        'other-colors-orange': '#ec6d26',
        'bg-dark-1': '#1d182a',
        'bg-dark-2': '#342f3f',
        'other-colors-system-black': '#000',
        'other-colors-system-label': '#000',
        overlay: 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Manrope'],
        second: ['Gabarito'],
        'sans-bold': ['Manrope-Bold'],
        'second-bold': ['Gabarito-Bold'],
      },
    },
  },
  plugins: [],
};

