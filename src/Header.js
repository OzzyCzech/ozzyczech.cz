import React, {Fragment} from 'react'

export default ({title}) => {
	return (<Fragment>
		<meta charSet="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

		<title>{title}</title>
		
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
		<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>

		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossOrigin="anonymous"/>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossOrigin="anonymous"></script>

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
	</Fragment>)
};