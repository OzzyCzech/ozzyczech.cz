import {defineConfig, passthroughImageService} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// Markdown plugins
import links from './src/markdown/links.js';
import youtube from './src/markdown/youtube.js';

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
			social: {
				github: 'https://github.com/OzzyCzech',
				stackOverflow: 'https://meta.stackoverflow.com/users/355316/ozzyczech'
			},
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
				{label: 'Awesome', collapsed: true, autogenerate: {directory: 'Awesome', collapsed: false}},
				{label: 'Web Development', collapsed: false, autogenerate: {directory: 'Web Development', collapsed: true}},
				{label: 'DevOps', collapsed: false, autogenerate: {directory: 'DevOps', collapsed: true}},
				{label: 'LifeHack', collapsed: true, autogenerate: {directory: 'LifeHack'}},
				{label: 'Photography', collapsed: true, autogenerate: {directory: 'Photography'}},
				{label: 'Security', collapsed: true, autogenerate: {directory: 'Security'}},
				{label: 'Hardware', collapsed: true, autogenerate: {directory: 'Hardware'}},
				{label: 'Povídky', collapsed: true, autogenerate: {directory: 'Povidky'}},
			]
		}),
		tailwind({applyBaseStyles: false})
	]
});