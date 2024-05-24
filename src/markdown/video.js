import {visit} from 'unist-util-visit';

export default function video(options = {}) {

	return tree => {
		visit(tree, 'link', (node) => {

			// Auto embed YouTube videos
			if (URL.canParse(node.url) && node.url.includes('youtube.com')) {
				const video = new URL(node.url);
				const id = video.searchParams.get('v');
				if (id) {
					node.type = 'html';
					node.value = `<iframe src="https://www.youtube.com/embed/${id}?rel=0&controls=1" allowfullscreen  style="aspect-ratio: 16 / 9; width: 100%; border: 0"></iframe></>`;
				}
			}
		});
	};
}