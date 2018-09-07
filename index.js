'use strict';

const {promisify, inspect} = require('util');

const fs = require('fs-extra');
const readFile = promisify(fs.readFile);
const outputFile = promisify(fs.outputFile);
const path = require('path');
const marked = require('marked');
const globby = require('globby');
const slugify = require('@sindresorhus/slugify');
const yaml = require('js-yaml');

const ejsRenderFile = promisify(require('ejs').renderFile);


const mtime = async file => {
	const stats = await fs.stat(file);
	return new Date(inspect(stats.mtime));
};

/**
 * Read single page from markdown
 * @param file
 * @returns {Promise<*>}
 */
const getPage = async (file) => {
	let content = await readFile(file, 'utf8');

	let frontmatter = {};
	if (content.indexOf('---') === 0) {
		const meta = content.match(/^---([\s\S]+?)---/);
		frontmatter = yaml.safeLoad(meta[1]);
		content = content.substring(meta[0].length).trim()
	}

	let page = Object.assign({}, frontmatter, {body: marked(content)});

	page.title = page.title || page.body.match(/>(.*?)<\/h/i)[1];
	page.slug = page.slug || slugify(page.title);
	page.date = page.date || mtime(file);
	page.output = page.output || page.slug + '.html';
	// page.layout = page.layout || 'layout.html'; // TODO

	return page;
};

/**
 * Read all pages at once...
 * @param files
 * @returns {Promise<Array>}
 */
const getPages = async (files) => {
	return await Promise.all(
			files.map(async file => {
				return await getPage(file);
			})
	)
};


const paginate = (array, page_size, page_number) => {
	--page_number; // because pages logically start with 1, but technically with 0
	return array.slice(page_number * page_size, (page_number + 1) * page_size);
};


/**
 * TODO https://github.com/markedjs/marked/issues/362 YouTube and others
 * @param options
 * @returns {Promise<void>}
 */
const sphido = async (options) => {

	// marked.setOptions(options.marked);

	try {

		const files = await globby(options.input + '/**/*.md');
		const pages = await getPages(files);


		// sort pages by date
		pages.sort(function (a, b) {
			return new Date(b.date) - new Date(a.date);
		});


		// console.log(paginate(pages, 2, 1));

		await files.forEach(async (file) => {

			// read input file
			let page = await getPage(file);
			let out = path.join(options.output, path.dirname(file).replace(options.input, ''), page.slug + '.html');

			// write output file
			await outputFile(out, `<!DOCTYPE html>
			<html lang="cs" dir="ltr">
			<head>
				<meta charset="UTF-8">
				<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
				<title>` + page.title + ` | blog.omdesign.cz</title>
			</head>
			<body class="bg-dark"><div class="container"><main class="shadow p-3 p-lg-5 mt-2 mt-lg-3 bg-white rounded">` + page.body + `</main></div></body></html>`
			);

		});

		// index.html
		let index = pages.reduce((articles, p) => articles + '<article class="shadow p-3 p-lg-5 mt-2 mt-lg-3 bg-white rounded">' + p.body + '</article>', '');

		await outputFile(path.join(options.output, 'index.html'),
				`<!DOCTYPE html>
			<html lang="cs" dir="ltr">
			<head>
				<meta charset="UTF-8">
				<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
				</head><<body class="bg-dark"><div class="container">` + index + '</div></body></html>'
		);


		// TODO Render page/index.html page/1/index.html, page/2/index.html ...


		// TODO Render tag/[tag]/index.html

	} catch (e) {
		console.error(e);
	}
};

module.exports = {
	default: sphido,
};