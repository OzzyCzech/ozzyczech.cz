#!/usr/bin/env node --experimental-modules --loader babel-register-esm

import path from 'path';
import fs from 'fs-extra';
import {globby} from 'globby';

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

import {getPages} from '@sphido/core';
import {pagination} from '@sphido/pagination';
import {link} from '@sphido/link';
import {feed} from '@sphido/feed';
import slugify from '@sindresorhus/slugify';

import React from 'react';
import {renderHTML, renderXML} from './src/render.js';

import Page from './src/Page.js';
import Pages from './src/Pages.js';
import PageTag from './src/PageTag.js';
import Sitemap from './src/Sitemap.js';

import {meta} from '@sphido/meta';
import {frontmatter} from '@sphido/frontmatter';
import {emoji} from '@sphido/emoji';
import {markdown, options, renderer} from '@sphido/markdown';

const domain = new URL('https://ozzyczech.cz/');

// syntax geighlight with prism
options(
	{
		highlight: (code, lang) => {
			lang = lang || 'markup';
			return Prism.highlight(code, Prism.languages[lang], lang);
		},
	},
);

// @see https://marked.js.org/using_pro#renderer

renderer(
	{
		paragraph: (text) => `<p class="mb-3">${text}</p>`,

		list: (body, order, start) => `<${order ? 'ol' : 'ul'} class="${order ? 'list-decimal' : 'list-disc'} ml-6 mb-3">${body}</${order ? 'ol' : 'ul'}>`,

		table: (header, body) => `<table class="table">${header}${body}</table>`,

		heading: (text, level, raw, slugger) => ({
			1: `<h1 id="${slugger.slug(raw)}">${text}</h1>`,
			2: `<h2 id="${slugger.slug(raw)}" class="text-2xl lg:text-4xl font-bold lg:mb-4">${text}</h2>`,
			3: `<h3 id="${slugger.slug(raw)}" class="text-xl lg:text-3xl mb-4">${text}</h3>`,
			4: `<h4 id="${slugger.slug(raw)}" class="lg:text-2xl mb-3">${text}</h4>`,
			5: `<h5 id="${slugger.slug(raw)}" class="font-bold mb-3">${text}</h5>`,
			6: `<h6 id="${slugger.slug(raw)}" class="font-bold mb-3">${text}</h6>`,
		})[level],

		image: (href, title, text) => {
			const className = new URL(href, domain).hash.substring(1).replace(/[_]/g, ' ');
			return `<div class=" ${className ? className : 'flex justify-center my-3'}">
							<figure class="max-w-xl mx-auto text-center">
								<a href="${href}" target="_blank">
									<img src="${href}" class="w-full rounded shadow bg-white dark:bg-black" title="${title ? title : ''}" alt="${text ? text : ''}"/>
								</a>		
								<figcaption class="mt-2 italic text-gray-400 text-center">${title ? title : (text ? text : null)}</figcaption>
						</figure>
			</div>`;
		},

		link: (href, title, text) => {
			// Current domain
			if (href.includes(domain.hostname)) {
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

			return `<a href="${href}" title="${title ? title : ''}" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">${text}</a>`;
		},
	},
);


(async () => {

	// Copy static content
	let files = await globby(['static/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}', 'static/404.html']);
	for await (let file of files) {
		await fs.copy(file, file.replace(/^[\w]+/, 'public'));
	}

	// Get pages from directory
	const pages = await getPages(
		await globby('content/**/*.{md,html}'),
		...[
			frontmatter,
			emoji,
			markdown,
			meta,
			(page) => page.tags.add('' + page.date.getFullYear()),
			{link},
		],
	);

	// Get sorted posts only
	const posts = pages.filter((page) => page.dir !== 'content' && page.base[0] !== '_');
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// tags
	let tags = new Map();
	posts.map((post) => {
		post.tags.forEach((tag) => {
			if (tags.has(tag)) {
				tags.get(tag).count++;
			} else {
				tags.set(tag, {title: tag, slug: slugify(tag), count: 1});
			}
		});
	});

	// Generate single pages...
	for await (let page of pages) {
		await renderHTML(
			<Page page={page} tags={tags}/>,
			path.join(page.dir.replace('content', 'public'), page.slug, 'index.html'),
		);
	}

	// index.json for https://fusejs.io/
	await fs.outputFile('public/index.json', JSON.stringify(
		posts.map(
			page => ({
				title: page.title,
				content: page.content.replace(/(<([^>]+)>)/ig, ''),
				link: page.link(domain),
				tags: [...page.tags],
			}),
		),
	));

	// tags pages

	for (const tag of tags.values()) {
		await renderHTML(
			<PageTag tag={tag.title} tags={tags} posts={posts.filter((post => post.tags.has(tag.title))).sort((a, b) => new Date(b.date) - new Date(a.date))}/>,
			path.join('public/tag/', tag.slug, 'index.html'),
		);
	}

	// TODO index tags render

	// posts pagination

	for await (const page of pagination(posts, 8)) {
		await renderHTML(
			<Pages posts={page.posts} current={page.current} pages={page.pages} tags={tags}/>,
			page.current === 1 ? 'public/index.html' : path.join('public/page/', page.current.toString(), 'index.html'),
		);
	}

	// sitemap.xml

	await renderXML(<Sitemap posts={posts} tags={tags}/>, 'public/sitemap.xml');

	// rss.xml

	await fs.outputFile(
		'public/rss.xml',
		feed(
			posts.slice(0, 20),
			{title: 'OzzyCzech.cz blog', description: 'Blog by Roman Ožana', link: 'https://ozzyczech.cz/'},
			domain + 'rss.xml',
		),
	);

})();