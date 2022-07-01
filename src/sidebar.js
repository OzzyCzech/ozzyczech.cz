import md5 from 'md5';

export function getSidebarMenu(pages, active, className = '') {
	let menu = '';

	for (const page of pages) {
		if (page?.children) {
			const expanded = active.startsWith(page.slug);
			menu += `<li>
	<button class="flex justify-between rounded py-3 pl-4 pr-2 flex bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 w-full mb-1" aria-expanded="${expanded}">
		<span>${page.name}</span>
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="fill-gray-500">
			<path d="M0 0h24v24H0z" fill="none"/>
			<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
		</svg>
	</button>
	${getSidebarMenu(page.children, active, expanded ? 'ml-2' : 'ml-2 hidden')}
</li>`;
		} else {
			menu += `<li>
	<a href="${page.slug}" ${page.slug === active ? 'aria-current="page"' : ''} class="flex py-3 px-4 rounded bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 w-full ${page.slug == active ? 'text-lime-300' : ''}">
		${page.name}
	</a>
</li>`;
		}
	}
	return `<ul class="space-y-1 mb-1 ${className}">${menu}</ul>`;
}

export function getAside(pages, active) {
	return `<section class="text-center">
				<a href="/" class="mb-3">
					<img src="https://www.gravatar.com/avatar/${md5('roman@ozana.cz')}?s=128" class="inline object-cover my-2 w-128 h-128 rounded-full" alt="Roman Ožana" />
				</a>
				<h5 class="text-2xl">
					Hi, <a href="https://ozana.cz" target="_blank" class="hover:text-blue-500 hover:underline">I am Roman!</a>
				</h5>
				<div class="mb-3 text-center">
					<a href="https://github.com/OzzyCzech/" target="_blank" class="hover:text-blue-500 hover:underline">GitHub</a>
					<span class="mx-1">•</span>
					<a href="https://meta.stackoverflow.com/users/355316/" target="_blank" class="hover:text-blue-500 hover:underline">StackOverflow</a>
					<span class="mx-1">•</span>
					<a href="https://www.twitter.com/OzzyCzech" target="_blank" class="hover:text-blue-500 hover:underline">Twitter</a>
			</div>				
			</section>
			<a href="/" class="rounded flex items-center gap-2 py-3 px-5 mb-1 flex bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="fill-gray-500"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
				<span>Homepage</span>
			</a>
			<nav>
				${getSidebarMenu([...pages].filter(page => page.name !== 'index'), active)}
			</nav>`;
}