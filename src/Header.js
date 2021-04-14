import React, {Fragment} from 'react'

export default ({title}) => {
	return (<Fragment>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

			<title>{title}</title>

			<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
			<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
			<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>

			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossOrigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossOrigin="anonymous"></script>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.4.5/fuse.min.js"></script>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/components/prism-core.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/autoloader/prism-autoloader.min.js"></script>
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