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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
};
