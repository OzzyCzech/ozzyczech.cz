const fs = require('fs-extra');
const {promisify} = require('util');
const outputFile = promisify(fs.outputFile);

// -----------------------------------------
// @see https://mozilla.github.io/nunjucks/
// -----------------------------------------

const slugify = require('@sindresorhus/slugify');
const nunjucks = require('nunjucks');

const env = nunjucks.configure('./template', {autoescape: true});
env.addFilter('slug', slugify);


module.exports = {
	env: env,
	numjucks: nunjucks,
	toFile: async (output, template, vars) => await outputFile(output, nunjucks.render(template, vars))
};