import {getAside} from './sidebar.js';
import {getDocument} from './document.js';

export function getPageHtml({content, title, slug} = {}, pages) {
	return getDocument({
		title,
		main: `<article class="prose max-w-full lg:prose-xl dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-h1:text-lime-300 lg:dark:bg-gray-800 lg:rounded-lg lg:px-24 lg:py-16">${content}</article>`,
		aside: getAside(pages, slug),
	});
}