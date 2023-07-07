import md5 from 'md5';

// https://www.gitbook.com/gitbook-library

export function getDocument({title, aside, main} = {}) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr" class="dark">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<title>${title || ''} / OzzyCzech.cz</title>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
	<link rel="stylesheet" href="/style.css"/>
	<script src="/app.js" type="module"></script>
</head>
<body class="antialiased leading-normal tracking-normal dark:bg-gray-900 dark:text-gray-200 selection:bg-sky-950">
<header class="sticky top-0 z-40 backdrop-blur bg-gray-50 dark:bg-gray-950 px-4 py-2.5 ">
	<div class="container flex flex-wrap items-center justify-between mx-auto ">
		<nav class="flex gap-6 items-center font-medium">
			<a href="/" class="flex items-center">
				<img src="https://www.gravatar.com/avatar/${md5('roman@ozana.cz')}?s=128" class="h-7 mr-3 rounded-full" alt="Roman Ožana"/>
				<span class="text-xl font-semibold whitespace-nowrap dark:text-white">Roman's notes</span>
			</a>
			<a href="https://github.com/OzzyCzech/" target="_blank" class="hidden md:inline hover:text-sky-500 hover:underline transition">GitHub</a>
			<a href="https://meta.stackoverflow.com/users/355316/" target="_blank" class="hidden md:inline hover:text-sky-500 hover:underline transition">StackOverflow</a>
			<a href="https://www.twitter.com/OzzyCzech" target="_blank" class="hidden md:inline hover:text-sky-500 hover:underline transition">Twitter</a>
		</nav>

		<button class="py-1.5 px-4 rounded-full border dark:border-gray-700 text-gray-500 hover:text-gray-400 hover:border-gray-600 dark:bg-gray-900 outline-0 inline-flex items-center gap-1" id="search">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
				<path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/>
			</svg>
			Search ⌘+K
		</button>
	</div>
	</div>
</header>

<div class="container mx-auto px-4">
	<div class="grid grid-cols-1 lg:grid-cols-[340px,minmax(0,auto)] gap-4 lg:gap-6 min-h-screen">
		<aside class="border-r dark:border-gray-800 overflow-y-auto">${aside}</aside>
		<main>${main}</main>
	</div>
</div>
<cmd-dialog theme="dark"></cmd-dialog>
</body>
</html>`;
}