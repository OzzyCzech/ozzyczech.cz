const getPage = require('./getPage');

module.exports = async (files) => {
		return await Promise.all(
				files.map(async file => {
					return await getPage(file);
				})
		)
};