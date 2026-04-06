import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// Markdown plugins
import links from './src/markdown/links.ts';
import youtube from './src/markdown/youtube.ts';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config

const site = 'https://ozzyczech.cz';
export default defineConfig({
	site,

	redirects: {
		'/photography/filtry': '/photography/accessories/filters',
		'/photography/equipment/filtry': '/photography/accessories/filters',
		'/photography/doplňky/filtry': '/photography/accessories/filters',
		'/photography/camera-gear': '/photography/accessories/camera-gear',
		'/photography/polarpro-lightleak-lens': '/photography/accessories/polarpro-lightleak-lens',
		'/photography/equipment/camera-gear': '/photography/accessories/camera-gear',
		'/photography/equipment/polarpro-lightleak-lens': '/photography/accessories/polarpro-lightleak-lens',
		'/photography/doplňky/camera-gear': '/photography/accessories/camera-gear',
		'/photography/doplňky/polarpro-lightleak-lens': '/photography/accessories/polarpro-lightleak-lens',
	},

	markdown: {
		remarkPlugins: [youtube],
		rehypePlugins: [links]
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
			sidebar: [
				{label: 'Home', link: '/'},
				{label: 'AI', collapsed: true, autogenerate: {directory: 'AI', collapsed: false}},
				{label: 'Development', collapsed: false, autogenerate: {directory: 'Development', collapsed: true}},
				{label: 'Command line', collapsed: true, autogenerate: {directory: 'Command line', collapsed: true}},
				{label: 'macOS', collapsed: true, autogenerate: {directory: 'macOS', collapsed: true}},
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