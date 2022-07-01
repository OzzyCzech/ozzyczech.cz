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
<body class="antialiased leading-normal tracking-normal container my-12 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,auto)_320px] gap-4 lg:gap-6">
	<aside>${aside}</aside>
	<main class="md:order-first">${main}</main>
</div>
</body>
</html>`;
}
