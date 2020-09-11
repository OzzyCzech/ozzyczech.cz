#!/usr/bin/env npx babel-node

import {join} from 'path';
import {copy, outputFile} from "fs-extra";
import globby from "globby";
import {getPages} from "@sphido/core";
import pagination from "@sphido/pagination";
import {link} from "@sphido/link";
import feed from "@sphido/feed";
import React from 'react'
import {renderHTML, renderXML} from "./src/render";

import Page from "./src/Page";
import Pages from "./src/Pages";
import PageTag from "./src/PageTag";
import slugify from "@sindresorhus/slugify";
import Sitemap from "./src/Sitemap";
import marked from 'marked';

// see https://marked.js.org/using_pro
const renderer = {
	// table classes
	table(header, body) {
		return `<table class="table table-bordered table-striped bg-white m-1">${header}${body}</table>`
	},

	// ext links have target="_blank"
	link(href, title, text) {
		if (href.includes('ozzyczech.cz')) {
			return `<a href="${href}" title="${title ? title : ''}">${text}</a>`
		} else {
			return `<a href="${href}" title="${title ? title : ''}" target="_blank">${text}</a>`
		}
	}
};

marked.use({renderer});

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
			(page) => {
				page.content = page.ext === '.html' ? page.content : marked(page.content);
			},
			require('@sphido/meta'),
			{link},
		]
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
			join(page.dir.replace('content', 'public'), page.slug, 'index.html')
		)
	}

	// index.json for https://fusejs.io/
	await outputFile('public/index.json', JSON.stringify(
		posts.map(
			page => ({
				title: page.title,
				content: page.content.replace(/(<([^>]+)>)/ig, ''),
				link: page.link('https://ozzyczech.cz/'),
				tags: [...page.tags],
			})
		)
	));

	// tags pages

	for (const tag of tags.values()) {
		await renderHTML(
			<PageTag tag={tag.title} tags={tags} posts={posts.filter((post => post.tags.has(tag.title)))}/>,
			join('public/tag/', tag.slug, 'index.html'),
		)
	}

	// TODO index tags render

	// posts pagination

	for await (const page of pagination(posts, 8)) {
		await renderHTML(
			<Pages posts={page.posts} current={page.current} pages={page.pages} tags={tags}/>,
			page.current === 1 ? 'public/index.html' : join('public/page/', page.current.toString(), 'index.html')
		);
	}

	// sitemap.xml

	await renderXML(<Sitemap posts={posts} tags={tags}/>, 'public/sitemap.xml');

	// rss.xml

	await outputFile(
		'public/rss.xml',
		feed(
			posts.slice(0, 20),
			{title: 'OzzyCzech.cz blog', description: 'Blog by Roman Ožana', link: 'https://ozzyczech.cz/',},
			'https://ozzyczech.cz/rss.xml'
		)
	);

})();