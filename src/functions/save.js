const {join} = require('path');
const {toFile} = require('../render');

module.exports = {
	/**
	 * Save page to file
	 * @param path
	 * @returns {Promise<*>}
	 */
	async save() {
		return await toFile(
				join(this.dir.replace('content', 'public'), this.slug, 'index.html'),
				this.template || 'single.html',
				{page: this})
	}
};