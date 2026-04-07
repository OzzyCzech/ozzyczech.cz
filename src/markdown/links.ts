import rehypeExternalLinks, {type Options} from 'rehype-external-links';
import type {Element} from 'hast';

export default function links(hostname = 'ozzyczech.cz') {
	const options: Options = {
		target: '_blank',
		rel: ['noopener', 'noreferrer'],
		test: (node: Element) => {
			const href = node.properties?.href;
			return typeof href === 'string' && URL.canParse(href) && new URL(href).hostname !== hostname;
		}
	};
	return [rehypeExternalLinks, options] as const;
}
