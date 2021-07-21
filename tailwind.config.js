const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.emerald.500'),
              '&:hover': {
                color: theme('colors.emerald.600'),
              },
            },

            // ...
          },
        },
      }),
      textColor: {
        white: '#ffffff',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        emerald: 'var(--color-text-emerald)',
        'emerald-hover': 'var(--color-text-emerald-hover)',
        indigo: 'var(--color-text-indigo)',
        'indigo-hover': 'var(--color-text-indigo-hover)',
        orange: 'var(--color-text-orange)',
        'orange-hover': 'var(--color-text-orange-hover)',
        rose: 'var(--color-text-rose)',
        amber: 'var(--color-text-amber)',
        'amber-hover': 'var(--color-text-amber-hover)',
        blue: 'var(--color-text-blue)',
        link: 'var(--color-text-link)',
        default: 'var(--color-text-default)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        emerald: 'var(--color-bg-emerald)',
        'button-indigo': 'var(--color-button-indigo)',
        'button-indigo-hover': 'var(--color-button-indigo-hover)',
      },
      ringOffsetColor: {
        primary: 'var(--color-bg-primary)',
      },
    },
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
