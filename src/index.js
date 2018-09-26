'use strict';

module.exports = {
	getPages: require('./getPages'),
	getPage: require('./getPage'),
	extenders: Object.assign({},
			require('./extenders/save')
	),


	getTags: require('./getTags'),
	render: require('./render'),
};