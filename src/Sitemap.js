import React from 'react'

export default ({posts, tags}) => {
	return (
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url>
				<loc>https://ozzyczech.cz/</loc>
				<lastmod>{new Date().toISOString()}</lastmod>
				<priority>1.0</priority>
			</url>
			{posts.map((post, index) =>
				<url key={index}>
					<loc>{post.link('https://ozzyczech.cz/')}</loc>
					<lastmod>{post.date.toISOString()}</lastmod>
					<priority>0.80</priority>
				</url>
			)}
			{[...tags].map((tag, index) =>
				<url key={index}>
					<loc>{'https://ozzyczech.cz/tag/' + tag.slug}</loc>
					<lastmod>{new Date().toISOString()}</lastmod>
					<priority>0.70</priority>
				</url>
			)}
		</urlset>);
}
