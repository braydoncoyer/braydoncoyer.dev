const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    inset: {
      0: 0,
      auto: 'auto',
      '1/2': '50%',
    },
    fill: (theme) => ({
      light: theme('colors.gray.50'),
      dark: theme('colors.coolGray.900'),
    }),
    fontFamily: {
      inter: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
