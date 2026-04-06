import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// Markdown plugins
import links from './src/markdown/links.ts';
import youtube from './src/markdown/youtube.ts';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config

const site = 'https://ozzyczech.cz';

/** Legacy /command-line/* URLs → /cli/* (folder rename 2026-04). */
const cliLegacyRedirects = {
	'/command-line/create-tar-of-all-folders': '/cli/bash--shell/create-tar-of-all-folders',
	'/command-line/create-a-tar-archive-of-each-folder': '/cli/bash--shell/create-tar-of-all-folders',
	'/command-line/download-website': '/cli/web/download-website',
	'/command-line/exiftool-tips-and-tricks': '/cli/media/exiftool-tips-and-tricks',
	'/command-line/ffmpeg/add-album-art-to-mp3-or-m4a-with-ffmpeg':
		'/cli/media/ffmpeg/add-album-art-to-mp3-or-m4a-with-ffmpeg',
	'/command-line/ffmpeg/convert-gif-to-webm': '/cli/media/ffmpeg/convert-gif-to-webm',
	'/command-line/ffmpeg/convert-m4a-to-mp3-with-ffmpeg':
		'/cli/media/ffmpeg/convert-m4a-to-mp3-with-ffmpeg',
	'/command-line/ffmpeg/create-image-slideshow': '/cli/media/ffmpeg/create-image-slideshow',
	'/command-line/ffmpeg/get-metadata-with-ffprobe': '/cli/media/ffmpeg/get-metadata-with-ffprobe',
	'/command-line/ffmpeg/timelapse-image-capture': '/cli/media/ffmpeg/timelapse-image-capture',
	'/command-line/generate-ssh-key': '/cli/security/generate-ssh-key',
	'/command-line/grep': '/cli/bash--shell/grep',
	'/command-line/load-env-file-in-bash': '/cli/bash--shell/load-env-file-in-bash',
	'/command-line/mail-testing': '/cli/testing/mail-testing',
	'/command-line/network': '/cli/network/open-ports',
	'/command-line/response-times-with-curl': '/cli/web/response-times-with-curl',
	'/command-line/tools/ufw': '/cli/security/ufw',
	'/command-line/twitter-and-youtube-download': '/cli/downloads/youtube-downloader',
	'/command-line/update-dns-settings': '/cli/network/update-dns-settings',
	'/command-line/website-screenshot': '/cli/web/website-screenshot',
	'/command-line/command-line-tools': '/cli/tools/command-line-tools',
	'/command-line/ufw': '/cli/security/ufw',
	'/command-line/bash--shell/create-tar-of-all-folders': '/cli/bash--shell/create-tar-of-all-folders',
	'/command-line/bash--shell/grep': '/cli/bash--shell/grep',
	'/command-line/bash--shell/load-env-file-in-bash': '/cli/bash--shell/load-env-file-in-bash',
	'/command-line/downloads/twitter-and-youtube-download': '/cli/downloads/youtube-downloader',
	'/command-line/git/backup-git-repository': '/cli/git/backup-git-repository',
	'/command-line/git/clone-all-branches-and-tags-at-once': '/cli/git/clone-all-branches-and-tags-at-once',
	'/command-line/git/gitlab-group-labels': '/cli/git/gitlab-group-labels',
	'/command-line/git/how-to-keep-github-fork-updated-no-merge---the-right-way':
		'/cli/git/how-to-keep-github-fork-updated-no-merge---the-right-way',
	'/command-line/media/exiftool-tips-and-tricks': '/cli/media/exiftool-tips-and-tricks',
	'/command-line/media/ffmpeg/add-album-art-to-mp3-or-m4a-with-ffmpeg':
		'/cli/media/ffmpeg/add-album-art-to-mp3-or-m4a-with-ffmpeg',
	'/command-line/media/ffmpeg/convert-gif-to-webm': '/cli/media/ffmpeg/convert-gif-to-webm',
	'/command-line/media/ffmpeg/convert-m4a-to-mp3-with-ffmpeg':
		'/cli/media/ffmpeg/convert-m4a-to-mp3-with-ffmpeg',
	'/command-line/media/ffmpeg/create-image-slideshow': '/cli/media/ffmpeg/create-image-slideshow',
	'/command-line/media/ffmpeg/get-metadata-with-ffprobe': '/cli/media/ffmpeg/get-metadata-with-ffprobe',
	'/command-line/media/ffmpeg/timelapse-image-capture': '/cli/media/ffmpeg/timelapse-image-capture',
	'/command-line/network/open-ports': '/cli/network/open-ports',
	'/command-line/network/update-dns-settings': '/cli/network/update-dns-settings',
	'/command-line/security/generate-ssh-key': '/cli/security/generate-ssh-key',
	'/command-line/security/ufw': '/cli/security/ufw',
	'/command-line/testing/mail-testing': '/cli/testing/mail-testing',
	'/command-line/tools/command-line-tools': '/cli/tools/command-line-tools',
	'/command-line/web/download-website': '/cli/web/download-website',
	'/command-line/web/response-times-with-curl': '/cli/web/response-times-with-curl',
	'/command-line/web/website-screenshot': '/cli/web/website-screenshot',
};

export default defineConfig({
	site,

	redirects: cliLegacyRedirects,

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
					label: 'Shell & CLI',
					collapsed: true,
					items: [
						{label: 'Bash & shell', collapsed: true, autogenerate: {directory: 'CLI/Bash & shell', collapsed: true}},
						{label: 'Git', collapsed: true, autogenerate: {directory: 'CLI/Git', collapsed: true}},
						{label: 'Media', collapsed: true, autogenerate: {directory: 'CLI/Media', collapsed: true}},
						{label: 'Web', collapsed: true, autogenerate: {directory: 'CLI/Web', collapsed: true}},
						{label: 'Network', collapsed: true, autogenerate: {directory: 'CLI/Network', collapsed: true}},
						{label: 'Security', collapsed: true, autogenerate: {directory: 'CLI/Security', collapsed: true}},
						{label: 'Downloads', collapsed: true, autogenerate: {directory: 'CLI/Downloads', collapsed: true}},
						{label: 'Testing', collapsed: true, autogenerate: {directory: 'CLI/Testing', collapsed: true}},
						{label: 'Tools', collapsed: true, autogenerate: {directory: 'CLI/Tools', collapsed: true}},
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