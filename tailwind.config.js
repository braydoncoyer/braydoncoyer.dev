const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx'
  ],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        headings: ['Manrope', ...defaultTheme.fontFamily.sans],
        fancy: ['Sriracha']
      },
      colors: {
        orange: colors.orange,
        blueGray: colors.slate,
        coolGray: colors.gray,
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
            table: false,
            tbody: false,
            thead: false,
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.slate.900'),
              '&:hover': {},
              textDecorationColor: theme('colors.teal.500'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
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
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.slate.50'),
              '&:hover': {
                color: theme('colors.teal.500')
              },
              textDecorationColor: theme('colors.teal.400'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
              backgroundColor: theme('colors.slate.800'),
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
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
