#!/usr/bin/env node

const {join} = require('path');
const globby = require('globby');
const {getPages} = require('@sphido/core');
const {outputFile, copy} = require('fs-extra');
const pagination = require('@sphido/pagination');
const {save, env, renderString, renderToFile} = require('@sphido/nunjucks');
const {link} = require('@sphido/link');
const feed = require('@sphido/feed');
const sitemap = require('@sphido/sitemap');


(async () => {

	// nunjucks setup
	env.addFilter('h1strip', content => content.replace(/<h1.*>.*?<\/h1>/g, ''));

	// Get pages from directory
	const pages = await getPages(
		await globby('content/**/*.{md,html}'),
		...[
			require('@sphido/frontmatter'),
			require('@sphido/twemoji'),
			require('@sphido/marked'),
			require('@sphido/meta'),
			{save, link},
		]
	);

	// Generate single pages...
	for await (let page of pages) {
		await page.save(
			page.dir.replace('content', 'public'),
			'theme/page.html'
		);
	}

	// Get sorted posts only
	const posts = pages.filter((page) => page.dir !== 'content' && page.base[0] !== '_');
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// index.json for https://fusejs.io/
	const striptags = env.getFilter('striptags');
	await outputFile('public/index.json', JSON.stringify(
		posts.map(
			page => ({
				title: page.title,
				content: striptags(page.content),
				link: page.link('https://ozzyczech.cz/'),
				tags: page.tags,
			})
		)
	));

	// Generate sitemap.xml
	await outputFile('public/sitemap.xml', sitemap(posts, 'https://ozzyczech.cz'));

	// Generate RSS
	await outputFile(
		'public/rss.xml',
		feed(
			posts.slice(0, 20),
			{title: 'OzzyCzech.cz blog', description: 'Blog by Roman Ožana', link: 'https://ozzyczech.cz/',},
			'https://ozzyczech.cz/rss.xml'
		)
	);


	for await (const page of pagination(posts, 8)) {
		await renderToFile(
			page.current === 1 ? 'public/index.html' : join('public/page/', page.current.toString(), 'index.html'),
			'theme/pages.html',
			{page}
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
	let files = await globby(['theme/**/*.*', 'content/**/*.*', '!**/*.{md,xml,html}', 'theme/404.html']);
	for await (let file of files) {
		await copy(file, file.replace(/^[\w]+/, 'public'))
	}

})();