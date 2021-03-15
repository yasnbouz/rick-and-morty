const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/{components,pages,styles}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background-100': 'hsl(226, 44%, 8%)',
      'background-200': 'hsl(226, 44%, 6%)',
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
