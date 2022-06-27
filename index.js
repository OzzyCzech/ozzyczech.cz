#!/usr/bin/env node --experimental-modules

import {dirname, relative, join} from 'node:path';
import {getPages, allPages, readFile, writeFile, copyFile} from '@sphido/core';
import slugify from '@sindresorhus/slugify';
import {globby} from 'globby';
import {marked} from './src/marked.js';
import {getPageHtml} from './src/get-page-html.js';
import {createSitemap} from '@sphido/sitemap';

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

// Render pages

for (const page of allPages(pages)) {
	page.content = await readFile(page.path);
	//page.tags = getHashtags(page.content);

	page.content = marked(page.content);
	page.title = page.content.match(/(?<=<h[12][^>]*?>)([^<>]+?)(?=<\/h[12]>)/i)?.pop();

	sitemap.add({
		url: new URL(page.slug, 'https://ozzyczech.cz').toString(),
	});

	await writeFile(page.output, getPageHtml(page, pages));
}

sitemap.end();


// Copy static files

const files = await globby(['static/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}', 'static/404.html']);
for await (const file of files) {
	await copyFile(file, file.replace(/^\w+/, 'public'));
}


// // tags
// let tags = new Map();
// posts.map((post) => {
// 	post.tags.forEach((tag) => {
// 		if (tags.has(tag)) {
// 			tags.get(tag).count++;
// 		} else {
// 			tags.set(tag, {title: tag, slug: slugify(tag), count: 1});
// 		}
// 	});
// });

// index.json for https://fusejs.io/
// await fs.outputFile('public/fuse.json', JSON.stringify(
// 	posts.map(
// 		page => ({
// 			title: page.title,
// 			content: page.content.replace(/(<([^>]+)>)/ig, ''),
// 			link: page.link(domain),
// 			tags: [...page.tags],
// 		}),
// 	),
// 	undefined, 2));
//
// // tags pages
//
// for (const tag of tags.values()) {
// 	await renderHTML(
// 		<PageTag tag={tag.title} tags={tags} posts={posts.filter((post => post.tags.has(tag.title))).sort((a, b) => new Date(b.date) - new Date(a.date))}/>,
// 		path.join('public/tag/', tag.slug, 'index.html'),
// 	);
// }
//
// // TODO index tags render
//
// // posts pagination
//
// for await (const page of pagination(posts, 8)) {
// 	await renderHTML(
// 		<Pages posts={page.posts} current={page.current} pages={page.pages} tags={tags}/>,
// 		page.current === 1 ? 'public/index.html' : path.join('public/page/', page.current.toString(), 'index.html'),
// 	);
// }