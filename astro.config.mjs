import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// Markdown plugins
import links from './src/markdown/links.ts';
import youtube from './src/markdown/youtube.ts';
import tailwindcss from '@tailwindcss/vite';
import { sidebar } from './src/sidebar.ts';

// https://astro.build/config

const site = 'https://ozzyczech.cz';

export default defineConfig({
	site,
	markdown: {
		remarkPlugins: [youtube],
		rehypePlugins: [links()]
	},

	image: {
		service: passthroughImageService(),
	},

	integrations: [
		starlight({
			title: 'Roman\'s notes',
			tableOfContents: false,
			pagination: false,
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/OzzyCzech/ozzyczech.cz'},
				{icon: 'stackOverflow', label: 'StackOverflow', href: 'https://meta.stackoverflow.com/users/355316/ozzyczech'}
			],
			head: [
				{
					tag: 'meta',
					attrs: {property: 'og:image', content: site + 'og.png'},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'alternate',
						type: 'application/rss+xml',
						title: "Roman's notes",
						href: site + '/rss.xml',
					},
				},
			],
			customCss: [
				'./src/style.css',
			],
			logo: {
				src: './src/assets/roman-ozana.jpg',
			},
			editLink: {
				baseUrl: 'https://github.com/OzzyCzech/ozzyczech.cz/edit/main/'
			},
			sidebar
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
});