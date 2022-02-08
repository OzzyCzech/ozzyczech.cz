import React, {Fragment} from 'react';

export default ({title}) => {
	return (<Fragment>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

			<title>{title}</title>

			<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
			<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
			<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/2.0.0-alpha0/date_fns.min.js"></script>

			<link rel="stylesheet" href="/css/style.css"/>
			<script src="/js/app.js"></script>
		</Fragment>
	);
};