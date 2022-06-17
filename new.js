#!/usr/bin/env node --experimental-modules
import {readdir, lstat, readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {basename, dirname, resolve, relative} from 'node:path';
import slugify from '@sindresorhus/slugify';

import {allPages, getPages, isValidPage, toFile} from './src/get-pages.js';
import {marked} from 'marked';

import Prism from 'prismjs';
import 'prismjs/components/prism-ini.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-less.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-swift.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-php-extras.js';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-yaml.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-bash.js';

const domain = new URL('https://ozzyczech.cz/');

marked.setOptions({
	highlight: (code, lang) => {
		lang = lang || 'markup';
		return Prism.highlight(code, Prism.languages[lang], lang);
	},
});

const renderer = {
	image(href, title, text) {
		const className = new URL(href, domain).hash.substring(1).replace(/[_]/g, ' ');
		if (!href.startsWith('/') && !href.startsWith('http')) href = '/' + href; // add leading '/'

		if (href.match(/mp4|webm|mov/)) {
			return `<video loop muted autoplay src="${href}" class="mx-auto rounded"></video>`;
		} else {
			return `<div class="${className ? className : 'flex justify-center'}">
							<figure>
								<a href="${href}" target="_blank">
									<img src="${href}" class="rounded shadow bg-white dark:bg-black" title="${title ? title : ''}" alt="${text ? text : ''}"/>
								</a>
								<figcaption>${title ? title : (text ? text : '')}</figcaption>
						</figure>
						</div>`;
		}
	},

	link(href, title, text) {
		// Current domain
		if (href.includes(domain.hostname) || href.startsWith('/')) {
			return `<a href="${href}" title="${title ? title : ''}">${text}</a>`;
		}

		// YouTube video embed
		if (href.includes('youtube.com') && href == text) {
			const video = new URL(href);
			const id = video.searchParams.get('v');
			if (id) {
				return `<div class="aspect-w-16 aspect-h-9"><iframe src="https://www.youtube.com/embed/${id}?rel=0&controls=1" allowfullscreen></iframe></div>`;
			}
		}

		// GitHub
		if (href.includes('github.com') && text == href) {
			// @see https://github.com/markedjs/marked/issues/458 - waiting for async
		}

		return `<a href="${href}" title="${title ? title : ''}" target="_blank">${text}</a>`;
	},
};

//marked.use({renderer});

console.time('process');

async function getHtml({name, content, aside}) {
	return `<!doctype html>
<html lang="en">
<head>
	<meta charSet="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<title>${name}</title>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
	<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!-- link rel="stylesheet" href="/css/style.css" /-->
	<script src="https://cdn.tailwindcss.com?plugins=typography"></script>
	<!-- script src="/js/app.js" type="module"></script -->
<body class="container my-12 mx-auto">
<div class="grid grid-cols-[320px_minmax(0,auto)] gap-6">
	<aside>${aside}</aside>
	<script>
for (const button of document.querySelectorAll('aside button')) {
	button.addEventListener('click', () =>{
		button.nextElementSibling.classList.toggle('hidden')
	})
}

function * getParents(element) {
	if (element?.parentElement) {
		yield * getParents(element.parentElement);	
	}
	
	if (element.tagName === 'UL') {
		yield element;
	}
}


for (const el of getParents(document.querySelector('[data-active=true]'))) {
	el.classList.remove('hidden');
} 

</script>
	<main class="prose lg:prose-xl hover:prose-a:underline prose-a:text-blue-600 max-w-full">${content}</main>
</div>
<footer></footer>
</body>
</html>
</head>`;
}


export function getSidebarMenu(pages, active, className = '') {
	let menu = '';
	for (const page of pages) {
		if (page?.children) {
			menu += `<li><button class="flex justify-between items-center hover:bg-gray-100 py-2.5 px-4 rounded w-full"><span>${page.name}</span><i class="material-icons text-gray-500">expand_more</i></u></button>${getSidebarMenu(page.children, active, 'hidden my-2 ml-4')}</li>`;
		} else {
			menu += `<li><a href="${page.href}" data-active="${page.href == active}" class="block hover:bg-gray-100 hover:text-violet-500 py-2.5 px-4 rounded ${page.href == active ? 'bg-gray-100 text-violet-500' : ''}">${page.name}</a></li>`;
		}
	}
	return `<ul class="space-y-2 transition-all ${className}">${menu}</ul>`;
}


const pages = await getPages('content', isValidPage, (page) => {
	page.href = join('/', relative('content', dirname(page.src)), slugify(page.name) + '.html');
});
// console.log(JSON.stringify(pages, null, 2));
const aside = getSidebarMenu(pages);


for (const page of allPages(pages)) {
	const content = marked(await readFile(page.src, 'utf8'));
	const html = await getHtml({...page, content, aside: getSidebarMenu(pages, page.href)});
	await toFile(join('public', page.href), html);
}

console.timeEnd('process');