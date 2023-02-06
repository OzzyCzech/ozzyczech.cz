#!/usr/bin/env node --experimental-modules
import dotenv from 'dotenv'
import {getTagIndexHtml} from './src/get-tag-index-html.js';
import {dirname, join, relative} from 'node:path';
import {allPages, copyFile, getPages, readFile, writeFile} from '@sphido/core';
import slugify from '@sindresorhus/slugify';
import {globby} from 'globby';
import {marked} from './src/marked.js';
import {getPageHtml} from './src/get-page-html.js';
import {createSitemap} from '@sphido/sitemap';
import {getHashtags} from '@sphido/hashtags';
import {getTagHtml} from './src/get-tag-html.js';
import {createFuse} from './src/fuse.js';
import {replaceSeries} from './src/replace-series.js';

dotenv.config();

console.time('Build HTML');

const sitemap = await createSitemap();
const fuse = await createFuse();

// Get pages list

const pages = await getPages({path: 'content'}, (page, dirent) => {

	if (dirent.isFile()) {
		page.slug = join('/', relative('content', dirname(page.path)), slugify(page.name === 'Homepage' ? 'index' : page.name) + '.html');
		page.output = join('public', page.slug);
	}

	if (dirent.isDirectory()) {
		page.slug = join('/', relative('content', dirname(page.path)), page.name);
	}
});

let tags = new Map();

// Render pages

for (const page of allPages(pages)) {
	page.content = await readFile(page.path);
	page.tags = getHashtags(page.content);
	page.url = new URL(page.slug, 'https://ozzyczech.cz').toString();

	// Process markdown and title

	page.content = marked(page.content);
	page.title = page.content.match(/(?<=<h[12][^>]*?>)([^<>]+?)(?=<\/h[12]>)/i)?.pop();

	// Add links to series page
	if (page.name === 'Series') {
		page.content = await replaceSeries(page.content)
	}

	// Save pages to lists

	fuse.add(page);
	sitemap.add(page);

	// Prepare tags object

	if (page.name !== 'index') {
		page.tags?.forEach((tag) => {
			if (!tags.has(tag)) {
				tags.set(tag, {
					title: tag.slice(1), slug: `/tag/${slugify(tag.toLowerCase())}`, children: [],
				});
			}
			tags.get(tag).children.push({slug: page.slug, title: page.title});
		});
	}

	await writeFile(page.output, getPageHtml(page, pages));
}

// Render tags

for (const [tag, page] of tags) {
	sitemap.add({url: new URL(`${page.slug}`, 'https://ozzyczech.cz').toString()});
	await writeFile(`public/${page.slug}/index.html`, getTagHtml(page, pages));
}

// Render tags cloud

await writeFile('public/tag/index.html', getTagIndexHtml(tags, pages));
sitemap.add({url: 'https://ozzyczech.cz/tag'});

// Save sitemap and Fuse.js

sitemap.end();
fuse.end();

// Copy static files

const files = await globby(['static/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}', 'static/404.html']);
for await (const file of files) {
	await copyFile(file, file.replace(/^\w+/, 'public'));
}

console.timeEnd('Build HTML');