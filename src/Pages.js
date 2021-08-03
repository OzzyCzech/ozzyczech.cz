import React from 'react'
import Aside from './Aside.js'
import Header from './Header.js'
import slugify from "@sindresorhus/slugify";
import Tag from "./Tag.js";

export default ({posts, current, pages, tags}) => {

	return (<html lang="cs" dir="ltr" className="dark">
	<head>
		<Header title={`OzzyCzech ${current > 1 ? `- Page of ${current} of ${pages.length}` : 'by Roman Ožana'}`}/>
	</head>

	<body className="line-numbers dark:bg-gray-900 text-dark">

	<Aside tags={tags}/>

	<main>
		{posts.map((page, index) =>
			<article className={page.slug + ' dark:text-gray-100'} key={index}>
				<small className="">{page.date.getDate()}.&nbsp;{page.date.getMonth() + 1}.&nbsp;{page.date.getFullYear()}</small>
				<h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold dark:text-lime-400 tracking-tight mb-8"><a href={page.link()}>{page.title}</a></h2>
				<div dangerouslySetInnerHTML={{__html: page.content.replace(/<h1.*>.*?<\/h1>/g, '')}}></div>
				{page.tags.size > 0 && <p className="text-right">{[...page.tags].map((tag, index) =>
					<Tag key={index} title={tag} slug={slugify(tag)}/>
				)}</p>}
			</article>
		)}
	</main>

	<footer>
		<nav>
			<ul className="inline-flex">
				{pages.map((pageNumber, index) =>
					<li className={`page-item my-3 ${pageNumber === current ? 'active' : ''}`} key={index}>
						<a className="h-10 px-5 rounded-l-lg focus:shadow-outline hover:bg-indigo-100" href={pageNumber > 1 ? '/page/' + pageNumber : '/'}>{pageNumber}</a>
					</li>
				)}
			</ul>
		</nav>
	</footer>

	</body>
	</html>);
}
