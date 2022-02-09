import React, {Fragment} from 'react';

export default ({title}) => {
	return (<Fragment>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			<title>{title}</title>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
			<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
			<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
			<link rel="stylesheet" href="/css/style.css"/>
			<script src="/js/app.js" type="module"></script>
		</Fragment>
	);
};