#!/usr/bin/env node --experimental-modules

console.time('Build HTML');

import {dirname, join, relative} from 'node:path';
import {allPages, copyFile, getPages, readFile, writeFile} from '@sphido/core';
import slugify from '@sindresorhus/slugify';
import {globby} from 'globby';
import {marked} from './src/marked.js';
import {getPageHtml} from './src/get-page-html.js';
import {createSitemap} from '@sphido/sitemap';
import {getHashtags, tagsToMarkdown} from '@sphido/hashtags';
import {getTagHtml} from './src/get-tag-html.js';

const sitemap = await createSitemap();

// Get pages list

const pages = await getPages({path: 'content'},
	(page, dirent) => {

		if (dirent.isFile()) {
			page.slug = join('/', relative('content', dirname(page.path)), slugify(page.name) + '.html');
			page.output = join('public', page.slug);
		}

		if (dirent.isDirectory()) {
			page.slug = join('/', relative('content', dirname(page.path)), page.name);
		}
	},
);

let tags = new Map();

// Render pages

for (const page of allPages(pages)) {
	page.content = await readFile(page.path);
	page.tags = getHashtags(page.content);
	page.content = marked(page.content);
	page.title = page.content.match(/(?<=<h[12][^>]*?>)([^<>]+?)(?=<\/h[12]>)/i)?.pop();
	page.url = new URL(page.slug, 'https://ozzyczech.cz').toString();

	sitemap.add(page);

	// prepare tags

	if (page.name !== 'index') {
		page.tags?.forEach((tag) => {
			if (!tags.has(tag)) {
				tags.set(tag, {
					title: tag.slice(1),
					slug: `/tag/${slugify(tag)}`,
					children: [],
				});
			}
			tags.get(tag).children.push({slug: page.slug, title: page.title});
		});
	}

	await writeFile(page.output, getPageHtml(page, pages));
}

// Render tags

for (const [tag, page] of tags) {
	await writeFile(`public/${page.slug}.html`, getTagHtml(page, pages));
}

sitemap.end();

// Copy static files

const files = await globby(['static/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}', 'static/404.html']);
for await (const file of files) {
	await copyFile(file, file.replace(/^\w+/, 'public'));
}

console.timeEnd('Build HTML');