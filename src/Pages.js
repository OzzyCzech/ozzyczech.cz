import React from 'react'
import Aside from './Aside.js'
import Header from './Header.js'
import slugify from "@sindresorhus/slugify";
import Tag from "./Tag.js";
import Post from "./Post.js"

export default ({posts, current, pages, tags}) => {

	return (<html lang="cs" dir="ltr" className="dark">
	<head>
		<Header title={`OzzyCzech ${current > 1 ? `- Page of ${current} of ${pages.length}` : 'by Roman Ožana'}`}/>
	</head>


	<body className="line-numbers antialiased leading-normal tracking-normal lg:container px-4 sm:px-6 xl:px-8 pt-10 pb-16 lg:pb-18 lg:mx-auto dark:bg-gray-900 dark:text-gray-100 min-h-screen">


	<div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6">

		<Aside tags={tags}/>

		<main className="lg:col-span-4 lg:order-first">
			{posts.map((page, index) =>
				<Post page={page} key={index}/>
			)}
		</main>


		<footer className="text-center lg:col-span-4">
			<nav className="block">
				<ul className="inline-flex list-none flex-wrap">
					{pages.map((pageNumber, index) =>
						<li className={`my-3 ${pageNumber === current ? 'active' : ''}`} key={index}>
							<a className="py-3 px-5 mr-1 inline-block rounded bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-opacity-20" href={pageNumber > 1 ? '/page/' + pageNumber : '/'}>{pageNumber}</a>
						</li>
					)}
				</ul>
			</nav>
		</footer>
	</div>
	</body>
	</html>);
}
