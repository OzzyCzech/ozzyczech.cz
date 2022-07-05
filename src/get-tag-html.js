import {getDocument} from './document.js';
import {getAside} from './sidebar.js';

export function getTagHtml({title, slug, children} = {}, pages) {
	return getDocument({
		title,
		main: `<article class="lg:dark:bg-gray-800 lg:rounded-xl lg:px-24 lg:py-16 prose max-w-full lg:prose-xl dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-h1:text-lime-300">
					<h1>#${title}</h1>
					<div class="not-prose">
						<ul>
							${children.map(page => `<li>
								<a
									href="${page.slug}"
									class="rounded flex items-center gap-2 py-3 px-5 mb-1 flex bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700"
									title="${page.title}"
									>${page.title}</a>
								</li>`).join('')}
						</ul>
					</div>
					`,
		aside: getAside(pages, slug),
	});
}