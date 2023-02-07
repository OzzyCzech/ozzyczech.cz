import md5 from 'md5';

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
	<script src="/js/app.js" type="module"></script>
</head>
<body class="antialiased leading-normal tracking-normal dark:bg-neutral-900 dark:text-neutral-200">
<header class="flex flex-wrap items-center justify-between mx-auto bg-gray-50 dark:bg-gray-800 px-4 py-3">

	<a href="/" class="flex items-center">
		<img src="https://www.gravatar.com/avatar/${md5('roman@ozana.cz')}?s=128" class="h-7 mr-3 rounded-full" alt="Roman Ožana" />
		<span class="text-xl font-semibold whitespace-nowrap dark:text-white">Roman's notes</span>
	</a>				
	
	<div>
		<ul class="flex flex-col md:flex-row gap-4">
			<li>
				<a href="https://github.com/OzzyCzech/" target="_blank" class="hover:text-yellow-500 hover:underline transition">GitHub</a>
			</li>
			<li>
				<a href="https://meta.stackoverflow.com/users/355316/" target="_blank" class="hover:text-yellow-500 hover:underline transition">StackOverflow</a>
			</li>
			<li>
				<a href="https://www.twitter.com/OzzyCzech" target="_blank" class="hover:text-yellow-500 hover:underline transition">Twitter</a>
			</li>
		</ul>
	</div>
			
</header>

<div>
	<div class="grid grid-cols-1 lg:grid-cols-[340px,minmax(0,auto)] gap-4 lg:gap-6 min-h-screen">
		<aside class="border-r dark:border-gray-800">${aside}</aside>
		<main>${main}</main>	
	</div>
</div>
<command-palette />
</body>
</html>`;
}
