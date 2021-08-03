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
			lime: colors.lime,
			green: colors.green
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
