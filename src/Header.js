import React, {Fragment} from 'react'

export default ({title}) => {
	return (<Fragment>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width"/>

			<title>{title}</title>

			<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
			<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
			<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>

			<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.4.5/fuse.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/2.0.0-alpha0/date_fns.min.js"></script>

			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132992179-1"></script>

			<script
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-132992179-1');
          `,
				}}
			/>

			<link rel="stylesheet" href="/css/style.css"/>
			<script src="/js/app.js"></script>
		</Fragment>
	)
};