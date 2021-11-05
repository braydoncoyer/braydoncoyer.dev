const colors = require('tailwindcss/colors');
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx'
  ],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        teal: colors.teal,
        dark: '#111827',
        darker: '#0d131f',
        midnight: '#1e293b',
        'midnight-hover': '#334155',
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        sky: colors.sky
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            a: {
              color: theme('colors.teal.500'),
              '&:hover': {
                color: theme('colors.teal.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
              backgroundColor: theme('colors.gray.50'),
              color: theme('colors.gray.700')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.900')
            },
            hr: { borderColor: theme('colors.gray.700') },
            strong: { color: theme('colors.gray.700') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            hr: {
              color: theme('colors.gray.200'),
              '&before': { content: '∿∿∿' }
            },
            code: { color: theme('colors.indigo.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: {
              backgroundColor: theme('colors.gray.100')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            a: {
              color: theme('colors.emerald.400'),
              '&:hover': {
                color: theme('colors.emerald.500')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.emerald.500'),
              backgroundColor: theme('colors.blueGray.800'),
              color: theme('colors.gray.400')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.white')
            },
            hr: { borderColor: theme('colors.gray.600') },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            code: { color: theme('colors.indigo.200') },
            pre: {
              backgroundColor: theme('colors.midnight')
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
