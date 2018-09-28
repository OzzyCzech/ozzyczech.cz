'use strict';

const getPage = require('./getPage');
const slugify = require('@sindresorhus/slugify');

const getUniqueTag = (pages) => {
	let tags = new Set();
	for (const page of pages) {
		page.tags.map(tag => tags.add(tag));
	}
	return tags;
};

module.exports = (pages) => {
	let structure = [];

	for (const page of pages) {
		page.tags.map(tag => {
			tag = slugify(tag);
			if (!(tag in structure)) structure[tag] = [];
			structure[tag].push(page);
		});
	}

	return structure;
};