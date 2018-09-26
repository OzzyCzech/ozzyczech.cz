'use strict';

module.exports = {
	getPages: require('./getPages'),
	getPage: require('./getPage'),

	extenders: [
		// page filters
		require('./filters/frontmatter'),
		require('./filters/htmlize'),
		require('./filters/meta'),

		// page functions
		Object.assign({},
				require('./functions/save')
		)
	],

	getTags: require('./getTags'),
	render: require('./render'),
};