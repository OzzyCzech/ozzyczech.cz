const colors = require('tailwindcss/colors')


console.log(process.env);

module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./public/**/*.html',
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
		require('cssnano')(process.env.NODE_ENV === 'production' ? {preset: 'default'} : false),
	],
}
