import {findAndReplace} from 'mdast-util-find-and-replace';
import slugify from '@sindresorhus/slugify';

export default function hashtags(options = {}) {

	return (tree) => {
		findAndReplace(
			tree,
			[
				[
					/#([\w-]{2,})/g,
					(value, match) => {
						return {
							type: 'link',
							url: `/tag/${slugify(match.toLowerCase())}`,
							children: [{type: 'text', value}],
						}
					},
				],
			],
			{ignore: ['link', 'linkReference']},
		);

	}
}