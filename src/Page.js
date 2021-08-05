import React from 'react'
import Aside from './Aside.js'
import Header from './Header.js'
import Post from "./Post.js";

export default ({page, tags}) => {
	return (<html lang="cs" dir="ltr" className="dark">
	<head>
		<Header title={page.title.trim()}/>
	</head>

	<body className="antialiased leading-normal tracking-normal lg:container px-4 sm:px-6 xl:px-8 pt-10 pb-16 lg:pb-18 lg:mx-auto dark:bg-gray-900 dark:text-gray-100 min-h-screen">

	<div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6">

		<Aside active={'/' + page.slug} tags={tags}/>

		<main className="lg:col-span-4 lg:order-first">
			<Post page={page} single={true}/>

			<div className="text-sm text-right text-gray-500">
				<script className="bg-gray-600" dangerouslySetInnerHTML={{__html: `showDate(new Date('${page.date}'))`}}/>
				<span className="mx-1">•</span>
				<a href={`https://raw.githubusercontent.com/OzzyCzech/ozzyczech.cz/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="hover:underline">raw</a>
				<span className="mx-1">•</span>
				<a href={`https://github.com/OzzyCzech/ozzyczech.cz/edit/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="hover:underline">edit</a>
			</div>
		</main>

	</div>

	</body>
	</html>);
}