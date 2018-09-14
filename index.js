'use strict';

const fs = require('fs-extra');
const path = require('path');
const globby = require('globby');

const {getPages, toFile, getTags} = require('./src');

/**
 * @param options
 * @returns {Promise<void>}
 */
const sphido = async (options) => {

	// marked.setOptions(options.marked);

	try {
		const files = await globby(options.input + '/**/*.md');
		const pages = await getPages(files);

		// create single pages
		for await (const page of pages) {
			page.output = path.join(options.output, path.dirname(page.file).replace(options.input, ''), page.slug + '.html');
			let template = page.template || options.template || 'index.html';
			await toFile(page.output, template, {page: page});
		}

		/*

		// TODO Render tag/[tag]/index.html
		const tags = getTags(pages);
		for (const tag in tags) {
			tags[tag].output = path.join(options.output, tag, 'index.html');
			await toFile(tags[tag].output, 'tag.html', {pages: tags[tag], tag: tag});
		}
		*/

		// TODO Render page/index.html page/1/index.html, page/2/index.html ...

		// sort pages by date
		pages.sort(function (a, b) {
			return new Date(b.date) - new Date(a.date);
		});

		// TODO sync static files
		/*
		let sync = await globby('template/**');
		console.log(sync);
		for await (const file of sync) {
			fs.copy(file, options.output + file);
		}
		*/

	} catch (e) {
		console.error(e);
	}
};

module.exports = {
	default: sphido,
};