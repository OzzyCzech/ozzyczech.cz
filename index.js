'use strict';

const fs = require('fs-extra');
const url = require('url');
const {join, resolve, format, dirname} = require('path');
const globby = require('globby');

const Sphido = require('./src');

/**
 * @param options
 * @returns {Promise<void>}
 */
const cms = async (options) => {

			try {

				// Get pages from directory
				const pages = await Sphido.getPages(await globby('content/**/*.{md,html}'), ...Sphido.extenders);

				// Generate single pages...
				for await (let page of pages) {
					await page.save();
				}

				// Sort by date
				pages.sort((a, b) => new Date(b.date) - new Date(a.date));

				const postPerPage = 5;
				const pagination = Sphido.pagination(pages.length, postPerPage);

				for await (let current of pagination) {
					await Sphido.render.toFile(
							current === 1 ? 'public/index.html' : join('public/page/', current.toString(), 'index.html'),
							'pages.html',
							{
								pages: pages.slice(postPerPage * (current - 1), current * postPerPage),
								pagination: pagination,
								current: current,
							}
					);

				}


				// Copy static content


				let files = await await globby(['template/**/*.*', 'content/**/*.*', '!**/*.{md,html}']);
				for await (let file of files) {
					await fs.copy(file, file.replace(/^[\w]+/, 'public'))
				}


				return;


				// TODO Render tag/[tag]/index.html
				/*
				const tags = sphido.getTags(pages);
				for (const tag in tags) {
					tags[tag].output = join(options.output, 'tag', tag, 'index.html');
					await toFile(tags[tag].output, 'tag.html', {pages: tags[tag], tag: tag});
				}
				*/

				// TODO Render page/index.html page/1/index.html, page/2/index.html ...

				// sort pages by date


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