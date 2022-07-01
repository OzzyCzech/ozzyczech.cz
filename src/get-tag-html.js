import {getDocument} from './document.js';
import {getAside} from './sidebar.js';

export function getTagHtml({title, slug, children} = {}, pages) {
	return getDocument({
		title,
		main: `<article class="lg:dark:bg-gray-800 lg:rounded-xl lg:px-24 lg:py-16 prose max-w-full lg:prose-xl dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-h1:text-lime-300">
					<h1>#${title}</h1>
					<ul>
						${children.map(page => `<li><a href="${page.slug}">${page.title}</a></li>`).join('')}
					</ul>`,
		aside: getAside(pages, slug),
	});
}