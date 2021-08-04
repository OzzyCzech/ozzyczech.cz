import React from 'react'
import Aside from './Aside.js'
import Header from './Header.js'
import Post from "./Post.js";

export default ({page, tags}) => {
	return (<html lang="cs" dir="ltr" className="dark">
	<head>
		<Header title={page.title.trim()}/>
	</head>

	<body className="line-numbers antialiased leading-normal tracking-normal lg:container px-4 sm:px-6 xl:px-8 pt-10 pb-16 lg:pb-18 lg:mx-auto dark:bg-gray-900 dark:text-gray-100 min-h-screen">

	<div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6">

		<Aside active={'/' + page.slug} tags={tags}/>

		<main className="lg:col-span-4 lg:order-first">
			<Post page={page} single={true}/>

			<small>
				Updated <script dangerouslySetInnerHTML={{__html: `let date = dateFns.distanceInWords(new Date('${page.date}'), new Date()) + ' ago '; document.currentScript.insertAdjacentHTML("beforebegin", date);`}}/>
				{` | `}<a href={`https://raw.githubusercontent.com/OzzyCzech/ozzyczech.cz/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">view</a>
				{` | `}<a href={`https://github.com/OzzyCzech/ozzyczech.cz/delete/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">delete</a>
				{` | `}<a href={`https://github.com/OzzyCzech/ozzyczech.cz/edit/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">edit</a>
			</small>
		</main>

	</div>

	</body>
	</html>);
}