import {getDocument} from './document.js';
import {getAside} from './sidebar.js';

export function getTagHtml({title, slug, children} = {}, pages) {
	return getDocument({
		title,
		main: `<article class="prose max-w-screen-lg lg:prose-lg mx-auto dark:prose-invert dark:prose-sky prose-a:no-underline prose-h1:text-yellow-500 hover:prose-a:underline my-12">
					<h1>#${title}</h1>
					<div class="not-prose">
						<ul class="flex flex-col gap-3">
							${children.map(page => `<li class="flex rounded grow border dark:border-neutral-900 grow dark:hover:bg-neutral-900 hover:bg-neutral-200">
								<a
									href="${page.slug}"
									class="flex py-3 px-5 font-semibold"
									title="${page.title}"
									>${page.title}</a>
								</li>`).join('')}
						</ul>
					</div>
					`,
		aside: getAside(pages, slug),
	});
}