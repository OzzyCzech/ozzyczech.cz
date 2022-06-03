---
title: HTML Skeleton
date: 2020-10-06
tags: [HTML, Snippets]
---

# HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title></title>
	<meta name="description" content=""/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="" />

	<!-- OG -->
	<meta property="og:title" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>

	<!-- Twitter card -->
	<meta name="twitter:card" content="summary_large_image"/>
	<meta name="twitter:image:alt" content="image description"/>

	<!-- Sitemap & RSS feed -->
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
	<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>

	<!-- Tailwind play -->
	<script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
</head>
<body class="prose">
	<header></header>
	<aside></aside>
	<main class="grid items-center order-first"></main>
	<footer></footer>
	<script src="app.js" async></script>
</body>
</html>
```

With:
* [Open Graph](https://ogp.me/)
* [Twitter card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
* [Tailwind Play](https://tailwindcss.com/)
* SVG favicon