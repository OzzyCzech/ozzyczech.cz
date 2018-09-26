'use strict';

const fs = require('fs-extra');
const {join, resolve, dirname} = require('path');
const globby = require('globby');


const Sphido = require('./src');

/**
 * @param options
 * @returns {Promise<void>}
 */
const cms = async (options) => {

			// marked.setOptions(options.marked);

			try {

				// Get pages from directory
				const pages = await Sphido.getPages(await globby('content/**/*.{md,html}'), Sphido.extenders);

				// Generate single pages...
				for await (const page of pages) {
					await page.save(page.dir.replace('./content', './public'), page.slug, 'index.html');
				}

				return;

				/*

				// TODO Render tag/[tag]/index.html
				const tags = sphido.getTags(pages);
				for (const tag in tags) {
					tags[tag].output = join(options.output, 'tag', tag, 'index.html');
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
		}
;

module.exports = {
	default: cms,
};