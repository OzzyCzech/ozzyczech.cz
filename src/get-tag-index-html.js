import {getDocument} from './document.js';
import {getAside} from './sidebar.js';

export function getTagIndexHtml(tags, pages) {
	return getDocument({
		title: 'Tags',
		main: `<article class="lg:dark:bg-gray-800 lg:rounded-xl lg:px-24 lg:py-16 prose max-w-full lg:prose-xl dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-h1:text-lime-300">
					<h1>#tags</h1>
					<div class="not-prose">
						<ul class="flex flex-wrap max-w-screen-md place-content-center items-center py-6 mx-auto">
							${[...tags.values()].map(tag => `<li>
								<a
									href="${tag.slug}"
									data-weight="${tag.children.length}"
									class="py-2 px-3 ${tag.children.length >= 15 ? 'font-bold text-6xl' : tag.children.length >= 10 ? 'font-semibold text-4xl' : tag.children.length >= 5 ? 'font-m edium text-3xl' : tag.children.length >= 3 ? 'font-semibold text-2xl': tag.children.length >= 2 ? 'text-xl' : 'text-gray-500'}"
									title="${tag.title}"
									>${tag.title}</a>
								</li>`).join('')}
						</ul>
					</div>
					`,
		aside: getAside(pages, 'tag'),
	});
}