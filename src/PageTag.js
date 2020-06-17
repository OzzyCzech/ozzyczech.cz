import React from 'react'
import Aside from './Aside'
import Header from './Header'
import Tag from "./Tag";

export default ({tag, posts, tags}) => {
	return (<html lang="cs" dir="ltr">
		<head>
			<Header title={`OzzyCzech - tag #${tag}`}/>
		</head>

		<body className="container-xxl">

		<Aside active={`/tag/${tag}`}/>

		<main>
			<h1>#{tag}</h1>
			<div className="list-group mt-3">
				{posts.map((post, index) =>
					<a className="list-group-item list-group-item-action" href={post.link()} key={index}>{post.title}</a>
				)}
			</div>
		</main>

		<footer>
			<p className="text-break px-3 py-2">
				{[...tags.values()].map((tag, index) =>
					<Tag key={index} slug={tag.slug} title={tag.title}/>
				)}
			</p>
		</footer>

		</body>
		</html>
	);
}