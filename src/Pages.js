import React from 'react'
import Aside from './Aside'
import Header from './Header'
import slugify from "@sindresorhus/slugify";
import Tag from "./Tag";

export default ({posts, current, pages, tags}) => {

	return (<html lang="cs" dir="ltr">
	<head>
		<Header title={`OzzyCzech ${current > 1 ? `- Page of ${current} of ${pages.length}` : 'by Roman Ožana'}`}/>
	</head>

	<body className="line-numbers container-xxl">

	<Aside tags={tags}/>

	<main>
		{posts.map((page, index) =>
			<article className={page.slug} key={index}>
				<small className="d-block pl-5 float-right text-secondary">{page.date.getDate()}.&nbsp;{page.date.getMonth() + 1}.&nbsp;{page.date.getFullYear()}</small>
				<h2 className="h1"><a href={page.link()}>{page.title}</a></h2>
				<div dangerouslySetInnerHTML={{__html: page.content.replace(/<h1.*>.*?<\/h1>/g, '')}}></div>
				{page.tags.size > 0 && <p className="text-right">{[...page.tags].map((tag, index) =>
					<Tag key={index} title={tag} slug={slugify(tag)}/>
				)}</p>}
			</article>
		)}
	</main>

	<footer>
		<nav>
			<ul className="pagination justify-content-center d-flex flex-wrap">
				{pages.map((pageNumber, index) =>
					<li className={`page-item my-3 ${pageNumber === current ? 'active' : ''}`} key={index}>
						<a className="page-link" href={pageNumber > 1 ? '/page/' + pageNumber : '/'}>{pageNumber}</a>
					</li>
				)}
			</ul>
		</nav>
	</footer>

	</body>
	</html>);
}