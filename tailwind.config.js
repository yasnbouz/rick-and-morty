const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: '#0E1324',
      black: '#303030',
      white: '#fff',
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      amber: colors.amber,
      red: colors.red,
      green: colors.green,
      purple: colors.purple,
    },
    fontFamily: {
      sans: ['Poppins', ...fontFamily.sans],
      serif: ['Georgia', ...fontFamily.serif],
    },
  },
  plugins: [],
};
