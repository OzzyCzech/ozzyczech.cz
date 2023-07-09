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
<body class="antialiased leading-normal tracking-normal dark:bg-gray-950 dark:text-gray-200 selection:bg-sky-950">
<header class="sticky top-0 z-40 backdrop-blur ">
	<div class="container border-b dark:border-b-gray-800 p-4 flex flex-wrap items-center justify-between mx-auto">
		<nav class="flex gap-6 items-center font-medium">
			<a href="/" class="flex items-center">
				<img src="https://www.gravatar.com/avatar/${md5('roman@ozana.cz')}?s=128" class="h-7 mr-3 rounded-full" alt="Roman Ožana"/>
				<span class="text-xl font-semibold whitespace-nowrap dark:text-white">Roman's notes</span>
			</a>
			<a href="https://github.com/OzzyCzech/" target="_blank" class="hidden md:inline hover:text-sky-500 hover:underline transition">GitHub</a>
			<a href="https://meta.stackoverflow.com/users/355316/" target="_blank" class="hidden md:inline hover:text-sky-500 hover:underline transition">StackOverflow</a>
			<a href="https://www.twitter.com/OzzyCzech" target="_blank" class="hidden md:inline hover:text-sky-500 hover:underline transition">Twitter</a>
		</nav>

    <div class="flex gap-6 items-center">
        <button class="py-1.5 px-3.5 rounded-lg border dark:border-gray-700 text-gray-500 hover:text-gray-400 hover:border-gray-600 outline-0 inline-flex items-center gap-1" id="search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/>
          </svg>
          Search ⌘+K
        </button>
        
        <a href="https://github.com/OzzyCzech/ozzyczech.cz" target="_blank" class="text-gray-500 hover:text-sky-500 transition ease-in-out">
          <svg class="h-6 w-6" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
          </svg>
        </a>
    </div>
	</div>
	</div>
</header>

<div class="container mx-auto px-4">
	<div class="grid grid-cols-1 lg:grid-cols-[320px,minmax(0,auto)] gap-4 lg:gap-6 min-h-screen">
		<aside class="border-r dark:border-gray-700/50 overflow-y-auto">${aside}</aside>
		<main>${main}</main>
	</div>
</div>
<cmd-dialog theme="dark"></cmd-dialog>
</body>
</html>`;
}