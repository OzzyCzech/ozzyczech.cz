const cssnano = require('cssnano')

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('autoprefixer'),
		process.env.VERCEL_ENV === 'production' ? cssnano({preset: 'default'}) : null,
	]
}