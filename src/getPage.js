const {promisify} = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const mtime = require('./mtime');
const slugify = require('@sindresorhus/slugify');
const marked = require('marked');
const yaml = require('js-yaml');

/**
 * Return {page} object
 * @param file
 * @returns {Promise<*>}
 */
module.exports = async (file) => {
	let content = await readFile(file, 'utf8');

	let frontmatter = {};
	if (content.indexOf('---') === 0) {
		const meta = content.match(/^---([\s\S]+?)---/);
		frontmatter = yaml.safeLoad(meta[1]);
		content = content.substring(meta[0].length).trim()
	}

	let page = Object.assign({}, frontmatter, {
		file: file,
		body: marked(content)
	});

	page.title = page.title || page.body.match(/>(.*?)<\/h/i)[1];
	page.slug = page.slug || slugify(page.title);
	page.date = page.date || mtime(file);
	page.tags = page.tags || [];

	return page;
};