const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: '#FFFFFF',
      gray: {
        50: '#F9FAFB',
        100: '#F2F4F7',
        200: '#E4E7EC',
        300: '#D0D5DD',
        400: '#98A2B3',
        500: '#667085',
        700: '#344054',
        900: '#101828',
      },
      primary: {
        50: '#F9F5FF',
        100: '#F4EBFF',
        500: '#9E77ED',
        600: '#7F56D9',
        700: '#6941C6',
      },
    },
    fontSize: {
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.875rem'],
      '4xl': ['2.25rem', { letterSpacing: '-0.02em', lineHeight: '2.75rem' }],
      '5xl': ['3rem', { letterSpacing: '-0.02em', lineHeight: '3.75rem' }],
      '6xl': ['3.75rem', { letterSpacing: '-0.02em', lineHeight: '4.5rem' }],
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
    },
  },

  plugins: [],
};
