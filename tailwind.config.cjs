const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
		//enabled: true,
		content: [
			'./src/**/*.html',
			'./src/**/*.js',
		]
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.trueGray,
			white: colors.white,
			black: colors.black,
			lime: colors.lime,
			red: colors.red,
			yellow: colors.amber,
			blue: colors.blue
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
