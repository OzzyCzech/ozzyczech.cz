---
title: HTML Skeleton
tags: [HTML, snippets]
---

# HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  
  <title></title>

  <!-- Author -->
  <meta name="author" content="Your name" />
  <meta name="description" content="Brief description" />

  <!-- OG -->
  <meta property="og:title" content="Your Page Title" />
  <meta property="og:description" content="Brief description" />
  <meta property="og:image" content="/some-image.png" />
  <meta property="og:url" content="/this-page.html" />
  <meta property="og:site_name" content="Your Site Name" />

  <!-- Twitter card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:alt" content="image description" />
  
  <!-- Sitemap & RSS feed -->
  <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
  <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>

  <!-- Tailwind -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.8.10/tailwind.min.css" integrity="sha512-KO1h5ynYuqsFuEicc7DmOQc+S9m2xiCKYlC3zcZCSEw0RGDsxcMnppRaMZnb0DdzTDPaW22ID/gAGCZ9i+RT/w==" crossorigin="anonymous" />
  <link href="style.css" rel="stylesheet" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body class="font-sans text-gray-900 leading-normal tracking-normal grid min-h-screen">
  <header></header>
  <main class="grid items-center"></main>
  <footer></footer>
  <script src="app.js" async></script>
</body>
</html>
```

With:

* [Twitter card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
* [Open Graph](https://ogp.me/)
* [Tailwind CSS](https://tailwindcss.com/)