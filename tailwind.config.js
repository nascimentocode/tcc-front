/** @type {import('tailwindcss').Config} */
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
      textSecondary: '#B5B3BC'
    },
    fontFamily: {
      montserrat: ['Montserrat']
    }
  },
  plugins: []
};
