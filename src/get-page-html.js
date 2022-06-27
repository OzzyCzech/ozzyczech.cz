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

export function emoji(emoji) {
	return `<img class="inline-block w-6 h-6"
	             src="https://twemoji.maxcdn.com/v/latest/svg/${emoji.codePointAt(0).toString(16)}.svg"
	             alt="${emoji}"
	             draggable="false"/>`;
}

export function getPageHtml({content, title, name, slug} = {}, pages) {
	return `<!DOCTYPE html>
<html lang="en" dir="ltr" class="dark">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<title>${title || name} / OzzyCzech.cz</title>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
	<link rel="stylesheet" href="/style.css"/>
	<script src="/js/app.js" type="module"></script>
</head>
<body class="antialiased leading-normal tracking-normal container my-12 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
	<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,auto)_320px] gap-4 lg:gap-6">
		<aside>
			<section class="text-center">
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
				${getSidebarMenu([...pages].filter(page => page.name !== 'index'), slug)}
			</nav>			
		</aside>
		<main class="md:order-first">
			<article class="max-w-full lg:dark:bg-gray-800 lg:rounded-xl lg:px-24 lg:py-16 prose max-w-full lg:prose-xl dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-h1:text-lime-300">${content}</article>
		</main>
		<aside>
		
		</aside>
	</div>
</body>
</html>`;
}


/*
<ul className="flex flex-row text-gray-500 gap-2">
				<li>last change <span data-ago={new Date(page.date).toISOString()}>{(new Date(page.date)).toLocaleDateString('cs-CZ')}</span></li>
				<li>
					<a
						href={`https://raw.githubusercontent.com/OzzyCzech/ozzyczech.cz/main/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`}
						target="_blank"
						className="bg-gray-800 hover:text-gray-200 hover:bg-gray-700 inline-block px-1.5 rounded-sm">raw</a>
				</li>
				<li><a
					href={`https://github.com/OzzyCzech/ozzyczech.cz/edit/main/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`}
					target="_blank"
					className="bg-gray-800 hover:text-gray-200 hover:bg-gray-700 inline-block px-1.5 rounded-sm">edit</a>
				</li>
			</ul>
 */