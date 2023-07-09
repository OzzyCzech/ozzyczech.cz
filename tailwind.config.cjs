const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {center: true, padding: '1rem'},
    extend: {
      colors: {
        gray: {
          '50': '#f6f7f9',
          '100': '#ebedf3',
          '200': '#d3d7e4',
          '300': '#acb4cd',
          '400': '#7f8cb1',
          '500': '#5f6d98',
          '600': '#4b577e',
          '700': '#3e4766',
          '800': '#363d56',
          '900': '#30354a',
          '950': '#171923', // https://uicolors.app/create
        },
      },
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': {content: ''},
            'blockquote p:last-of-type::after': {content: ''},
            'figcaption': {textAlign: 'center', fontStyle: 'italic'},
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-debug'),
  ],
};
