import {visit} from 'unist-util-visit';

export default function images(options = {}) {

	return tree => {
		visit(tree, 'image', (node) => {

			// Add leading slash to relative URLs
			if (
				!node.url.startsWith('http') &&
				!node.url.startsWith('/')
			) {
				node.url = `/${node.url}`;
			}

			// Video files
			if (node.url.match(/mp4|webm|ogg|mov/)) {
				node.type = 'html';
				node.value = `<video controls loop muted autoplay class="mx-auto rounded"><source src="${node.url}"></video>`;
			}
		});
	};
}