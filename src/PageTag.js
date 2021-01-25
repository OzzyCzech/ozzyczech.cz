import React from 'react'
import Aside from './Aside.js'
import Header from './Header.js'

export default ({tag, posts, tags}) => {
	return (<html lang="cs" dir="ltr">
		<head>
			<Header title={`OzzyCzech - tag #${tag}`}/>
		</head>

		<body className="container-xxl">

		<Aside active={`/tag/${tag}`} tags={tags}/>

		<main>
			<h1>#{tag}</h1>
			<div className="list-group mt-3">
				{posts.map((post, index) =>
					<a className="list-group-item list-group-item-action" href={post.link()} key={index}>{post.title}</a>
				)}
			</div>
		</main>

		</body>
		</html>
	);
}