module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'partials/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#fdf9f3',
          200: '#efe6d6',
          300: '#ded0bb',
          400: '#b7a995',
          500: '#8a7e6d',
          600: '#6a6258',
          700: '#4d473f',
          800: '#2f2b26',
          900: '#1d1a16'
        },
        purple: {
          100: '#f5eddc',
          200: '#eadac0',
          300: '#dcc7a0',
          400: '#c9b07a',
          500: '#b89a5d',
          600: '#8f6f3e',
          700: '#745931',
          800: '#5f4928',
          900: '#49381f'
        },
        backgroundColor: '#f6f1e8'
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%'
      },
      fontFamily: {
        inter: ['Manrope', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        'architects-daughter': ['"Cormorant Garamond"', 'serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem'
      },
      inset: {
        full: '100%'
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em'
      },
      minWidth: {
        '10': '2.5rem'
      },
      scale: {
        '98': '.98'
      },
      customForms: (theme) => ({
        default: {
          'input, textarea, multiselect, select, checkbox, radio': {
            backgroundColor: 'transparent',
            borderColor: theme('colors.gray.700'),
            borderRadius: theme('borderRadius.sm'),
            '&:focus': {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme('colors.gray.500')
            }
          },
          'input, textarea, multiselect, select': {
            backgroundColor: 'transparent',
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme('spacing.3'),
            paddingRight: theme('spacing.4'),
            paddingBottom: theme('spacing.3'),
            paddingLeft: theme('spacing.4')
          },
          'input, textarea': {
            '&::placeholder': {
              color: theme('colors.gray.500')
            }
          },
          select: {
            paddingRight: theme('spacing.10'),
            iconColor: theme('colors.gray.500')
          },
          'checkbox, radio': {
            color: theme('colors.purple.600'),
            backgroundColor: 'transparent'
          }
        }
      })
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [require('@tailwindcss/custom-forms')]
}
