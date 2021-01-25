#!/usr/bin/env node --experimental-modules --experimental-loader @node-loader/babel

import path from 'path';
import fs from "fs-extra";
import globby from "globby";

import {getPages} from "@sphido/core";
import {pagination} from "@sphido/pagination";
import {link} from "@sphido/link";
import {feed} from "@sphido/feed";
import slugify from "@sindresorhus/slugify";

import React from 'react'
import {renderHTML, renderXML} from "./src/render.js";

import Page from "./src/Page.js";
import Pages from "./src/Pages.js";
import PageTag from "./src/PageTag.js";
import Sitemap from "./src/Sitemap.js";

import {meta} from '@sphido/meta';
import {frontmatter} from '@sphido/frontmatter';
import {emoji} from '@sphido/emoji';
import {markdown, renderer} from '@sphido/markdown'

const domain = new URL('https://ozzyczech.cz/');

// @see https://marked.js.org/using_pro#renderer

renderer(
	{
		table: (header, body) => `<table class="table table-bordered table-striped bg-white m-1">${header}${body}</table>`,

		image: (href, title, text) => {
			const className = new URL(href, domain).hash.substring(1).replace(/[_]/g, ' ');
			return `<div class=" ${className ? className : 'd-flex justify-content-center my-1'}"><figure class="figure text-center w-75">
			<a href="${href}" target="_blank"><img src="${href}" class="figure-img img-fluid rounded shadow" title="${title ? title : ''}" alt="${text ? text : ''}"/></a>		
			<figcaption class="figure-caption text-center">${title ? title : (text ? text : null)}</figcaption></figure></div>`
		},

		link: (href, title, text) => {
			if (href.includes(domain.hostname)) {
				return `<a href="${href}" title="${title ? title : ''}">${text}</a>`
			} else {
				return `<a href="${href}" title="${title ? title : ''}" target="_blank">${text}</a>`
			}
		}
	}
);


(async () => {

	// Copy static content
	let files = await globby(['static/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}', 'static/404.html']);
	for await (let file of files) {
		await fs.copy(file, file.replace(/^[\w]+/, 'public'))
	}

	// Get pages from directory
	const pages = await getPages(
		await globby('content/**/*.{md,html}'),
		...[
			frontmatter,
			emoji,
			markdown,
			meta,
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
			path.join(page.dir.replace('content', 'public'), page.slug, 'index.html')
		)
	}

	// index.json for https://fusejs.io/
	await fs.outputFile('public/index.json', JSON.stringify(
		posts.map(
			page => ({
				title: page.title,
				content: page.content.replace(/(<([^>]+)>)/ig, ''),
				link: page.link(domain),
				tags: [...page.tags],
			})
		)
	));

	// tags pages

	for (const tag of tags.values()) {
		await renderHTML(
			<PageTag tag={tag.title} tags={tags} posts={posts.filter((post => post.tags.has(tag.title)))}/>,
			path.join('public/tag/', tag.slug, 'index.html'),
		)
	}

	// TODO index tags render

	// posts pagination

	for await (const page of pagination(posts, 8)) {
		await renderHTML(
			<Pages posts={page.posts} current={page.current} pages={page.pages} tags={tags}/>,
			page.current === 1 ? 'public/index.html' : path.join('public/page/', page.current.toString(), 'index.html')
		);
	}

	// sitemap.xml

	await renderXML(<Sitemap posts={posts} tags={tags}/>, 'public/sitemap.xml');

	// rss.xml

	await fs.outputFile(
		'public/rss.xml',
		feed(
			posts.slice(0, 20),
			{title: 'OzzyCzech.cz blog', description: 'Blog by Roman Ožana', link: 'https://ozzyczech.cz/',},
			domain + 'rss.xml'
		)
	);

})();