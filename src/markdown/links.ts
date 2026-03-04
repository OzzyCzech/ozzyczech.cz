import rehypeExternalLinks, {type Options} from 'rehype-external-links';
import type {Element} from 'hast';

const options: Options = {
	target: '_blank',
	rel: ['noopener', 'noreferrer'],
	test: (node: Element) => {
		const href = node.properties?.href;
		return typeof href === 'string' && URL.canParse(href) && new URL(href).hostname !== 'ozzyczech.cz';
	}
};

export default [rehypeExternalLinks, options] as const;
