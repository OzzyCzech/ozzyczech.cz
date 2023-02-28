import {getDocument} from './document.js';
import {getAside} from './sidebar.js';

export function getTagIndexHtml(tags, pages) {
	return getDocument({
		title: 'Tags',
		main: `<article class="prose max-w-screen-lg lg:prose-lg mx-auto dark:prose-invert dark:prose-sky prose-a:no-underline prose-h1:text-yellow-500 hover:prose-a:underline my-12">
					<h1>#tags</h1>
					<div class="not-prose">
						<ul class="flex flex-wrap max-w-screen-lg place-content-center items-center py-6 mx-auto">
							${[...tags.values()].map(tag => `<li>
								<a
									href="${tag.slug}"
									data-weight="${tag.children.length}"
									class="py-2 px-3 ${tag.children.length >= 15 ? 'font-bold text-6xl' : tag.children.length >= 10 ? 'font-semibold text-4xl' : tag.children.length >= 5 ? 'font-medium text-3xl' : tag.children.length >= 3 ? 'font-semibold text-2xl' : tag.children.length >= 2 ? 'text-xl' : 'text-neutral-500'}"
									title="${tag.title}"
									>#${tag.title}</a>
								</li>`).join('')}
						</ul>
					</div>
					`,
		aside: getAside(pages, 'tag'),
	});
}