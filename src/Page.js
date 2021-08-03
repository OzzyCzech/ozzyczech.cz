import React from 'react'
import Aside from './Aside.js'
import Header from './Header.js'
import slugify from "@sindresorhus/slugify";
import Tag from "./Tag.js";

export default ({page, tags}) => {
	return (<html lang="cs" dir="ltr" className="dark">
	<head>
		<Header title={page.title.trim()}/>
	</head>

	<body className="line-numbers container-xxl">

	<Aside active={'/' + page.slug} tags={tags}/>

	<main className="bg-white dark:bg-gray-800">
		<article className={page.slug}>
			<small className="d-block float-end text-secondary">{page.date.getDate()}.&nbsp;{page.date.getMonth() + 1}.&nbsp;{page.date.getFullYear()}</small>{' '}
			<div dangerouslySetInnerHTML={{__html: page.content}}></div>
			{page.tags.size > 0 && <p className="text-right">{[...page.tags].map((tag, index) =>
				<Tag key={index} title={tag} slug={slugify(tag)}/>
			)}</p>}
		</article>
	</main>

	<footer className="text-secondary text-right">
		<small>
			Updated <script dangerouslySetInnerHTML={{__html: `let date = dateFns.distanceInWords(new Date('${page.date}'), new Date()) + ' ago '; document.currentScript.insertAdjacentHTML("beforebegin", date);`}}/>
			{` | `}<a href={`https://raw.githubusercontent.com/OzzyCzech/ozzyczech.cz/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">view</a>
			{` | `}<a href={`https://github.com/OzzyCzech/ozzyczech.cz/delete/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">delete</a>
			{` | `}<a href={`https://github.com/OzzyCzech/ozzyczech.cz/edit/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">edit</a>
		</small>
	</footer>

	</body>
	</html>);
}