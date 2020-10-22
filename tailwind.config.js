module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      colors: {
        'dark-mode-blue': '#171923',
      },
    },
    fontFamily: {
      inter: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
