const fs = require('fs-extra');
const {promisify} = require('util');
const slugify = require('@sindresorhus/slugify');
const outputFile = promisify(fs.outputFile);

// Template engine
// @see https://mozilla.github.io/nunjucks/
// TODO https://github.com/markedjs/marked/issues/362 YouTube and others
const nunjucks = require('nunjucks');
const env = nunjucks.configure('./template', {autoescape: true});
env.addFilter('slug', slugify);

module.exports = async (output, template, vars) => {
	await outputFile(output, nunjucks.render(template, vars));
};