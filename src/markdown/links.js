import {visit} from 'unist-util-visit';
import {basename, dirname, join} from 'node:path';
import slugify from '@sindresorhus/slugify';

export default function links(options = {}) {

	return tree => {
		visit(tree, 'link', (node) => {

			if (
				!node.url.startsWith('http') &&
				!node.url.startsWith('/')
			) {
				node.url = `/${node.url}`;
			}

			// replace .md links with .html
			if (!node.url.startsWith('http') && node.url.endsWith('.md')) {
				node.url = join(dirname(node.url), `${slugify(basename(node.url, '.md'))}.html`);
			}

			// external links
			if (!node.url.includes('ozzyczech.org') && !node.url.startsWith('/')) {

				const hProperties = node.data?.hProperties ?? {};

				// add noopener and noreferrer to external links
				hProperties.target = '_blank';
				hProperties.rel = ['noopener', 'noreferrer'];

				node.data = {hProperties};
			}

		});
	};
}