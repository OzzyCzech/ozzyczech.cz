#!/usr/bin/env npx babel-node

import {join} from 'path';
import {copy, outputFile} from "fs-extra";
import globby from "globby";
import {getPages} from "@sphido/core";
import pagination from "@sphido/pagination";
import {link} from "@sphido/link";
import feed from "@sphido/feed";
import sitemap from "@sphido/sitemap";
import React from 'react'
import {render} from "./src/render";

import Page from "./src/Page";
import Pages from "./src/Pages";
import Tag from "./src/Tag";
import slugify from "@sindresorhus/slugify";

(async () => {

	// Copy static content
	let files = await globby(['static/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}', 'static/404.html']);
	for await (let file of files) {
		await copy(file, file.replace(/^[\w]+/, 'public'))
	}

	// Get pages from directory
	const pages = await getPages(
		await globby('content/**/*.{md,html}'),
		...[
			require('@sphido/frontmatter'),
			require('@sphido/twemoji'),
			require('@sphido/marked'),
			require('@sphido/meta'),
			{link},
		]
	);

	// Generate single pages...
	for await (let page of pages) {
		await render(
			<Page page={page}/>,
			join(page.dir.replace('content', 'public'), page.slug, 'index.html')
		)
	}

	// Get sorted posts only
	const posts = pages.filter((page) => page.dir !== 'content' && page.base[0] !== '_');
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// index.json for https://fusejs.io/
	await outputFile('public/index.json', JSON.stringify(
		posts.map(
			page => ({
				title: page.title,
				content: page.content.replace(/(<([^>]+)>)/ig, ''),
				link: page.link('https://ozzyczech.cz/'),
				tags: page.tags,
			})
		)
	));

	// Generate sitemap.xml
	await outputFile('public/sitemap.xml', sitemap(posts, 'https://ozzyczech.cz/'));

	// Generate RSS
	await outputFile(
		'public/rss.xml',
		feed(
			posts.slice(0, 20),
			{title: 'OzzyCzech.cz blog', description: 'Blog by Roman Ožana', link: 'https://ozzyczech.cz/',},
			'https://ozzyczech.cz/rss.xml'
		)
	);

	// tags

	let tags = new Set();
	posts.map((post) => {
		post.tags.forEach((tag) => {
			tags.add(tag)
		});
	});

	for (const tag of tags) {
		await render(
			<Tag tag={tag} tags={tags} posts={posts.filter((post => post.tags.has(tag)))}/>,
			join('public/tag', slugify(tag), 'index.html'),
		)
	}

	for await (const page of pagination(posts, 8)) {
		await render(
			<Pages posts={page.posts} current={page.current} pages={page.pages}/>,
			page.current === 1 ? 'public/index.html' : join('public/page/', page.current.toString(), 'index.html')
		);
	}

})();