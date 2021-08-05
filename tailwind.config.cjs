const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
		enabled: true,
		content: [
			'./public/**/*.html',
			'./src/**/*.js',
		]
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
				lime: colors.lime,
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
