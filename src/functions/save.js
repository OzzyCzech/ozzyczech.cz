const {join} = require('path');
const {toFile} = require('../render');

module.exports = {
	/**
	 * Save page to file
	 * @param path
	 * @returns {Promise<*>}
	 */
	async save(...path) {
		return await toFile(join(...path), this.template || 'post.html', {page: this})
	}
};