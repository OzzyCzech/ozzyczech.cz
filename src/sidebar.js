export function getSidebarMenu(pages, active, className = '') {
	let menu = '';

	for (const page of pages) {
		if (page?.children) {
			const expanded = active.startsWith(page.slug);
			menu += `<li>
				<button class="flex justify-between w-full px-3 py-2 rounded font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800" aria-expanded="${expanded}">
					<span>${page.name}</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" class="fill-natural-500 dark:fill-neutral-400">
						<path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
					</svg>
				</button>
				${getSidebarMenu(page.children, active, expanded ? 'mx-1.5 mt-1' : 'mx-1.5 hidden')}
			</li>`;
		} else {
			menu += `<li>
	<a href="${page.slug}" ${page.slug === active ? 'aria-current="page"' : ''} class="flex py-2 px-3 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full ${page.slug == active ? 'font-semibold dark:bg-neutral-800 text-yellow-300' : ''}">
		${page.name}
	</a>
</li>`;
		}
	}
	return `<ul class="space-y-1 mb-1 ${className}">${menu}</ul>`;
}

export function getAside(pages, active) {
	return `
			<nav class="mx-1 my-3">
				<a href="/" class="flex justify-between w-full px-3 py-2 rounded font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800">
					<span>Homepage</span>
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="fill-gray-500"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
				</a>
				${getSidebarMenu([...pages].filter(page => page.name !== 'Homepage'), active)}
			</nav>`;
}