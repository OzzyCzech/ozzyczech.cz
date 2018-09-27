'use strict';

module.exports = {

	extenders: [
		// page filters
		require('./filters/frontmatter'),
		require('./filters/htmlize'),
		require('./filters/meta'),

		// page functions
		Object.assign({},
				require('./functions/save'),
				require('./functions/excerpt'),
				require('./functions/url')
		)
	],

	pagination: (total, perpage) => [...Array(Math.ceil(total / perpage)).keys()].map(i => ++i),

	getPages: require('./getPages'),
	getPage: require('./getPage'),
	getTags: require('./getTags'),

	render: require('./render'),
};