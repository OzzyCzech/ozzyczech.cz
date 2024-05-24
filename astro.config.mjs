import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// Markdown plugins
import links from './src/markdown/links.js';
import video from './src/markdown/video.js';

// https://astro.build/config
export default defineConfig({
	site: 'https://ozzyczech.cz',
	markdown: {
		remarkPlugins: [links, video]
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

			logo: {
				src: './src/assets/roman-ozana.jpg',
			},

			editLink: {
				baseUrl: 'https://github.com/OzzyCzech/ozzyczech.cz/edit/main/'
			},
			sidebar: [
				{label: 'Home', link: '/'},
				{label: 'Awesome', collapsed: true, autogenerate: {directory: 'Awesome'}},
				{
					label: 'Web Development',
					items: [
						{label: 'Assets', autogenerate: {directory: 'Web Development/Assets'}, collapsed: true},
						{label: 'Javascript', autogenerate: {directory: 'Web Development/Javascript'}, collapsed: true},
						{label: 'Tailwind', autogenerate: {directory: 'Web Development/Tailwind'}, collapsed: true},
						{label: 'CSS', autogenerate: {directory: 'Web Development/CSS'}, collapsed: true},
						{label: 'PHP', collapsed: true, autogenerate: {directory: 'Web Development/PHP'}},
						{label: 'Wordpress', collapsed: true, autogenerate: {directory: 'Web Development/Wordpress'}},
						{label: 'Services', collapsed: true, autogenerate: {directory: 'Web Development/Services'}},
						{label: 'Tools', collapsed: true, autogenerate: {directory: 'Web Development/Tools'}},
					]
				},
				{
					label: 'DevOps',
					items: [
						{label: 'macOS', autogenerate: {directory: 'OS/macOS'}, collapsed: true},
						{label: 'Linux', autogenerate: {directory: 'OS/Linux'}, collapsed: true},
						{label: 'Docker', collapsed: true, autogenerate: {directory: 'OS/Docker'}},
						{label: 'Command line', collapsed: true, autogenerate: {directory: 'OS/Command line'}},
					]
				},
				{label: 'LifeHack', collapsed: true, autogenerate: {directory: 'LifeHack'}},
				{label: 'Photography', collapsed: true, autogenerate: {directory: 'Photography'}},
				{label: 'Security', collapsed: true, autogenerate: {directory: 'Security'}},
				{label: 'Hardware', collapsed: true, autogenerate: {directory: 'Hardware'}},
				{label: 'Povídky', collapsed: true, autogenerate: {directory: 'Povidky'}},
			]
		})
	]
});