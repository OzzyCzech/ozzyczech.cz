import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// Markdown plugins
import links from './src/markdown/links.ts';
import youtube from './src/markdown/youtube.ts';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config

const site = 'https://ozzyczech.cz';

/** Old command-line URLs after docs restructure (2026-04). */
const commandLineRedirects = {
	'/command-line/create-tar-of-all-folders': '/command-line/bash--shell/create-tar-of-all-folders',
	'/command-line/create-a-tar-archive-of-each-folder':
		'/command-line/bash--shell/create-tar-of-all-folders',
	'/command-line/download-website': '/command-line/web/download-website',
	'/command-line/exiftool-tips-and-tricks': '/command-line/media/exiftool-tips-and-tricks',
	'/command-line/ffmpeg/add-album-art-to-mp3-or-m4a-with-ffmpeg':
		'/command-line/media/ffmpeg/add-album-art-to-mp3-or-m4a-with-ffmpeg',
	'/command-line/ffmpeg/convert-gif-to-webm': '/command-line/media/ffmpeg/convert-gif-to-webm',
	'/command-line/ffmpeg/convert-m4a-to-mp3-with-ffmpeg':
		'/command-line/media/ffmpeg/convert-m4a-to-mp3-with-ffmpeg',
	'/command-line/ffmpeg/create-image-slideshow': '/command-line/media/ffmpeg/create-image-slideshow',
	'/command-line/ffmpeg/get-metadata-with-ffprobe': '/command-line/media/ffmpeg/get-metadata-with-ffprobe',
	'/command-line/ffmpeg/timelapse-image-capture': '/command-line/media/ffmpeg/timelapse-image-capture',
	'/command-line/generate-ssh-key': '/command-line/security/generate-ssh-key',
	'/command-line/grep': '/command-line/bash--shell/grep',
	'/command-line/load-env-file-in-bash': '/command-line/bash--shell/load-env-file-in-bash',
	'/command-line/mail-testing': '/command-line/testing/mail-testing',
	'/command-line/network': '/command-line/network/open-ports',
	'/command-line/response-times-with-curl': '/command-line/web/response-times-with-curl',
	'/command-line/tools/ufw': '/command-line/security/ufw',
	'/command-line/twitter-and-youtube-download': '/command-line/downloads/twitter-and-youtube-download',
	'/command-line/update-dns-settings': '/command-line/network/update-dns-settings',
	'/command-line/website-screenshot': '/command-line/web/website-screenshot',
	'/command-line/command-line-tools': '/command-line/tools/command-line-tools',
	'/command-line/ufw': '/command-line/security/ufw',
};

export default defineConfig({
	site,

	redirects: commandLineRedirects,

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
				{label: 'Inspiration', collapsed: true, autogenerate: {directory: 'Inspiration', collapsed: false}},
				{
					label: 'Command line',
					collapsed: true,
					items: [
						{label: 'Bash & shell', collapsed: true, autogenerate: {directory: 'Command line/Bash & shell', collapsed: true}},
						{label: 'Git', collapsed: true, autogenerate: {directory: 'Command line/Git', collapsed: true}},
						{label: 'Media', collapsed: true, autogenerate: {directory: 'Command line/Media', collapsed: true}},
						{label: 'Web', collapsed: true, autogenerate: {directory: 'Command line/Web', collapsed: true}},
						{label: 'Network', collapsed: true, autogenerate: {directory: 'Command line/Network', collapsed: true}},
						{label: 'Security', collapsed: true, autogenerate: {directory: 'Command line/Security', collapsed: true}},
						{label: 'Downloads', collapsed: true, autogenerate: {directory: 'Command line/Downloads', collapsed: true}},
						{label: 'Testing', collapsed: true, autogenerate: {directory: 'Command line/Testing', collapsed: true}},
						{label: 'Tools', collapsed: true, autogenerate: {directory: 'Command line/Tools', collapsed: true}},
					],
				},
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
							autogenerate: {directory: 'Photography/Accessories'},
						},
					],
				},
				{label: 'Security', collapsed: true, autogenerate: {directory: 'Security'}},
				{label: 'Hardware', collapsed: true, autogenerate: {directory: 'Hardware', collapsed: true}},
				{label: 'Movies & TV', collapsed: true, autogenerate: {directory: 'Movies & TV', collapsed: false}},
				{label: 'Povídky', collapsed: true, autogenerate: {directory: 'Povidky'}},
			]
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
});