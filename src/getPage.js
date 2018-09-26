const {promisify} = require('util');
const fs = require('fs');
const {dirname, parse, extname, basename} = require('path');
const readFile = promisify(fs.readFile);
const mtime = require('./mtime');
const slugify = require('@sindresorhus/slugify');
const marked = require('marked');
const yaml = require('js-yaml');

/**
 * Return {page} object
 * @param file
 * @param extenders
 * @returns {Promise<*>}
 */
module.exports = async (file, ...extenders) => {
	let content = await readFile(file, 'utf8');


	let frontmatter = {};
	if (content.indexOf('---') === 0) {
		const meta = content.match(/^---([\s\S]+?)---/);
		frontmatter = yaml.safeLoad(meta[1]);
		content = content.substring(meta[0].length).trim()
	}

	let ext = extname(file);
	let page = Object.assign({},
			frontmatter, {
				file: file,
				dir: dirname(file),
				ext: ext,
				base: basename(file, ext),
				content: content
			},
	);

	page.title = page.title || page.content.match(/>(.*?)<\/h/i)[1];
	page.slug = page.slug || slugify(page.title);
	page.date = page.date || mtime(file);
	page.tags = [...new Set(page.tags)] || [];

	return Object.assign({}, page, ...extenders.map(f => typeof f === 'function' ? f(page) : f));
};