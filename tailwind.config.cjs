const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
		enabled: process.env.VERCEL_ENV === 'production',
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
			},
			gridTemplateColumns: {
				'300px': 'minmax(0, auto) 300px',
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
