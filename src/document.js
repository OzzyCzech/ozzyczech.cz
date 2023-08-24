import md5 from 'md5';

// https://www.gitbook.com/gitbook-library

export function getDocument({title, aside, main} = {}) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<title>${title || ''} / OzzyCzech.cz</title>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
	<script src="/theme.js"></script>
	<script src="/app.js" type="module" async></script>
	<link rel="stylesheet" href="/style.css"/>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
	<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ik8np4lwxl");
  </script>
</head>
<body class="antialiased leading-normal tracking-normal dark:bg-gray-950 dark:text-gray-200 dark:selection:bg-sky-950">
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
        <button type="button" onclick="theme.toggle()">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden dark:block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        </button>
        <a href="https://github.com/OzzyCzech/ozzyczech.cz" target="_blank">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <button class="py-1.5 px-3.5 rounded-lg border dark:border-gray-700 text-gray-500 hover:text-gray-400 hover:border-gray-600 outline-0 inline-flex items-center gap-1" id="search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/>
          </svg>
          Search ⌘+K
        </button>
    </div>
	</div>
	</div>
</header>

<div class="container px-4 mx-auto">
	<div class="grid grid-cols-1 lg:grid-cols-[320px,minmax(0,auto)] gap-4 lg:gap-6 min-h-screen">
		<aside class="border-r dark:border-gray-900">${aside}</aside>
		<main>${main}</main>
	</div>
</div>
<cmd-dialog theme="dark"></cmd-dialog>
</body>
</html>`;
}