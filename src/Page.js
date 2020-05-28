import React from 'react'
import Aside from './Aside'
import Header from './Header'
import Tags from './Tags'

export default ({page}) => {
	return (<html lang="cs" dir="ltr">
	<head>
		<Header title={page.title.trim()}/>
	</head>

	<body className="line-numbers">

	<Aside/>

	<main>
		<article className={page.slug}>
			<small className="d-block float-right text-secondary">{new Intl.DateTimeFormat('cs').format(page.date)}</small>
			<div dangerouslySetInnerHTML={{__html: page.content}}></div>
			<Tags tags={page.tags}/>
		</article>
	</main>

	<footer className="text-secondary text-right">
		<small>
			<script dangerouslySetInnerHTML={{__html: `let date = dateFns.distanceInWords(new Date('${page.date}'), new Date()) + ' ago '; document.currentScript.insertAdjacentHTML("beforebegin", date);`}}/>
			{` | `}<a href={`https://raw.githubusercontent.com/OzzyCzech/ozzyczech.cz/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">view</a>
			{` | `}<a href={`https://github.com/OzzyCzech/ozzyczech.cz/delete/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">delete</a>
			{` | `}<a href={`https://github.com/OzzyCzech/ozzyczech.cz/edit/master/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`} target="_blank" className="text-secondary">edit</a>
		</small>
	</footer>

	</body>
	</html>);
}