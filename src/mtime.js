const fs = require('fs-extra');
const {inspect} = require('util');

/**
 * Return file mtime
 * @param file
 * @returns {Promise<Date>}
 */
module.exports = async file => {
	const stats = await fs.stat(file);
	return new Date(inspect(stats.mtime));
};