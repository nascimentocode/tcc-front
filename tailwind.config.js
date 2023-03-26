/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#0368FF',
      secondary: '#FF3E95',
      accent: '#5899FF',
      background: '#171717',
      textPrimary: '#F2F0FF',
      textSecondary: '#B5B3BC',
      ...colors
    },
    fontFamily: {
      montserrat: ['Montserrat']
    },
    backgroundImage: {
      'login-image': 'url(./src/assets/login-image.png'
    }
  },
  plugins: []
};
