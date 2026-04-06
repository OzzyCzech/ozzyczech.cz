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
		'/photography/sony': '/photography/sony/cameras/',
		'/photography/canon': '/photography/canon/cameras/',
		'/photography/nikon': '/photography/nikon/cameras/',
		'/photography/panasonic': '/photography/panasonic/cameras/',
		'/photography/fujifilm': '/photography/fujifilm/cameras/',
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
				{
					label: 'Photography',
					collapsed: true,
					items: [
						
						{
							label: 'Sony',
							collapsed: false,
							autogenerate: {directory: 'Photography/Sony', collapsed: false},
						},
						{
							label: 'Fujifilm',
							collapsed: false,
							autogenerate: {directory: 'Photography/Fujifilm', collapsed: false},
						},
						{
							label: 'Nikon',
							collapsed: false,
							autogenerate: {directory: 'Photography/Nikon', collapsed: false},
						},
						{
							label: 'Panasonic',
							collapsed: false,
							autogenerate: {directory: 'Photography/Panasonic', collapsed: false},
						},
						{
							label: 'Canon',
							collapsed: false,
							autogenerate: {directory: 'Photography/Canon', collapsed: false},
						},
						'photography/compact-cameras',
						'photography/action-cameras',
						'photography/photo-hosting',
						{
							label: 'Software',
							collapsed: true,
							autogenerate: {directory: 'Photography/Software', collapsed: true},
						},
						{
							label: 'Accessories',
							collapsed: false,
							autogenerate: {directory: 'Photography/Accessories', collapsed: false},
						},
					],
				},
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