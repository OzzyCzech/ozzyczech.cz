import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// Markdown plugins
import links from './src/markdown/links.js';
import youtube from './src/markdown/youtube.js';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config

const site = 'https://ozzyczech.cz';
export default defineConfig({
	site,

	markdown: {
		remarkPlugins: [links, youtube]
	},

	image: {
		service: passthroughImageService(),
	},

	integrations: [
		starlight({
			title: 'Roman\'s notes',
			tableOfContents: true,
			pagination: false,
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/OzzyCzech/ozzyczech.cz'},
				{icon: 'stackOverflow', label: 'StackOverflow', href: 'https://meta.stackoverflow.com/users/355316/ozzyczech'}
			],
			head: [
				{
					tag: 'meta',
					attrs: {property: 'og:image', content: site + 'og.png'},
				}
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
			sidebar: [
				{label: 'Home', link: '/'},
				{label: 'Web Development', collapsed: false, autogenerate: {directory: 'Web Development', collapsed: true}},
				{label: 'DevOps', collapsed: false, autogenerate: {directory: 'DevOps', collapsed: true}},
				{label: 'Awesome', collapsed: true, autogenerate: {directory: 'Awesome', collapsed: false}},
				{label: 'Life Hack', collapsed: true, autogenerate: {directory: 'LifeHack'}},
				{label: 'Photography', collapsed: true, autogenerate: {directory: 'Photography', collapsed: true}},
				{label: 'Security', collapsed: true, autogenerate: {directory: 'Security'}},
				{label: 'Hardware', collapsed: true, autogenerate: {directory: 'Hardware', collapsed: true}},
				{label: 'Povídky', collapsed: true, autogenerate: {directory: 'Povidky'}},
			]
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
});