#!/usr/bin/env node

const Sphido = require('sphido');
const fs = require('fs-extra');
const {join, resolve, format, dirname} = require('path');
const globby = require('globby');
const twemoji = require('twemoji');

(async () => {

	try {

		// Get pages from directory
		const pages = await Sphido.getPages(await globby('content/**/*.{md,html}'), ...Sphido.extenders,
				(page) => {
					page.content = twemoji.parse(page.content); // twemoji
				}
		);

		// Generate single pages...
		for await (let page of pages) {
			await page.save(page.dir.replace('content', 'public'));
		}

		// Generate sitemap.xml
		Sphido.template.toFile(
				'public/sitemap.xml',
				'theme/sitemap.xml',
				{pages: pages,  date: new Date().toISOString(), domain: 'https://blog.omdesign.cz'}
		);

		// Get sorted posts only
		const posts = pages.filter((page) => page.dir !== 'content' && page.base[0] !== '_');
		posts.sort((a, b) => new Date(b.date) - new Date(a.date));

		// Generate pages
		const postPerPage = 5;
		const pagination = Sphido.pagination(posts.length, postPerPage);

		for await (let current of pagination) {
			await Sphido.template.toFile(
					current === 1 ? 'public/index.html' : join('public/page/', current.toString(), 'index.html'),
					'theme/pages.html',
					{
						pages: posts.slice(postPerPage * (current - 1), current * postPerPage),
						pagination: pagination,
						current: current,
					}
			);
		}

		// TODO Render tag/[tag]/index.html
		/*
		const tags = sphido.getTags(pages);
		for (const tag in tags) {
			tags[tag].output = join(options.output, 'tag', tag, 'index.html');
			await toFile(tags[tag].output, 'tag.html', {pages: tags[tag], tag: tag});
		}
		*/

		// Copy static content
		let files = await await globby(['theme/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}']);
		for await (let file of files) {
			await fs.copy(file, file.replace(/^[\w]+/, 'public'))
		}

	} catch (e) {
		console.error(e);
	}
})();