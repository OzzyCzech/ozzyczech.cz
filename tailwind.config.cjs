const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./public/**/*.html',
		'./src/**/*.js',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
				lime: colors.lime,
			},
			gridTemplateColumns: {
				'300px': 'minmax(0, auto) 300px',
			},

			typography: ({theme}) => ({
				DEFAULT: {
					css: {
						'blockquote p:first-of-type::before': {content: ''},
						'blockquote p:last-of-type::after': {content: ''},
						'figcaption': {textAlign: 'center', fontStyle: 'italic'},
					},
				},
				invert: {
					css: {
						'--tw-prose-links': theme('colors.blue[400]'),
						'--tw-prose-code': theme('colors.pink[400]'),
					},
				},
				gray: {
					css: {
						'--tw-prose-links': theme('colors.blue[600]'),
						'--tw-prose-code': theme('colors.pink[400]'),
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
	],
};
