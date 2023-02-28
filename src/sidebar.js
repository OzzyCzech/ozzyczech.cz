export function getSidebarMenu(pages, active, className = '') {
	let menu = '';

	for (const page of pages) {
		if (page?.children) {
			const expanded = active.startsWith(page.slug);
			menu += `<li>
				<button class="flex justify-between w-full px-2.5 py-1.5 rounded font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-900 ${expanded ? 'text-yellow-300' : ''}" aria-expanded="${expanded}">
					<span>${page.name}</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" class="fill-natural-500 dark:fill-neutral-400">
						<path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
					</svg>
				</button>
				${getSidebarMenu(page.children, active, expanded ? '' : 'hidden')}
			</li>`;
		} else {
			menu += `<li>
								<a href="${page.slug}" ${page.slug === active ? 'aria-current="page"' : ''} class="flex px-2.5 py-1.5 rounded hover:bg-neutral-200 dark:hover:bg-neutral-900 w-full ${page.slug == active ? 'dark:bg-neutral-900 text-yellow-300' : ''}">
									${page.name}
								</a>
							</li>`;
		}
	}
	return `<ul class="space-y-1 m-2 ${className}">${menu}</ul>`;
}

export function getAside(pages, active) {
	return `
			<nav class="font-semibold">
				<div class="mx-2 mt-2 mb-1">
					<a href="/" class="flex justify-between px-2.5 py-1.5 rounded hover:bg-neutral-200 dark:hover:bg-neutral-900">
						<span>Homepage</span>
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="fill-neutral-500"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
					</a>
				</div>
			
				${getSidebarMenu([...pages].filter(page => page.name !== 'Homepage'), active)}
			</nav>`;
}