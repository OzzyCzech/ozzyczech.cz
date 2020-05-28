import React from 'react'
import Aside from './Aside'
import Tags from './Tags'
import Header from './Header'

export default ({posts, current, pages}) => {
	return (<html lang="cs" dir="ltr">
	<head>
		<Header title={`OzzyCzech ${current > 1 ? `- Page of ${current} of ${pages.length}` : 'by Roman Ožana'}`}/>
	</head>

	<body className="line-numbers">

	<Aside/>

	<main>
		{posts.map((page, index) =>
			<article className={page.slug} key={index}>
				<small className="d-block float-right text-secondary">{new Intl.DateTimeFormat('cs').format(page.date)}</small>
				<h2 className="h1"><a href={page.link()}>{page.title}</a></h2>
				<div dangerouslySetInnerHTML={{__html: page.content.replace(/<h1.*>.*?<\/h1>/g, '')}}></div>
				{page.tags.size > 0 && <p className="text-right text-secondary"><Tags tags={page.tags}/></p>}
			</article>
		)}
	</main>

	<footer>
		<nav>
			<ul className="pagination justify-content-center d-flex flex-wrap">
				{pages.map((pageNumber, index) =>
					<li className={`page-item my-2 ${pageNumber === current ? 'active' : ''}`} key={index}>
						<a className="page-link" href={pageNumber > 1 ? '/page/' + pageNumber : '/'}>{pageNumber}</a>
					</li>
				)}
			</ul>
		</nav>
	</footer>

	</body>
	</html>);
}