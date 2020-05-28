import React, {Fragment} from 'react'
import Aside from './Aside'
import Header from './Header'
import slugify from "@sindresorhus/slugify";

export default ({tag, posts, tags}) => {
	return (<html lang="cs" dir="ltr">
		<head>
			<Header title={`OzzyCzech - tag #${tag}`}/>
		</head>

		<body>

		<Aside/>

		<main>
			<article>
				<h1><a href={`/tag/${slugify(tag)}`}>#{tag}</a></h1>
				<div className="list-group mt-3">
					{posts.map((post, index) =>
						<a className="list-group-item list-group-item-action" href={post.link()} key={index}>{post.title}</a>
					)}
				</div>
			</article>
		</main>

		<footer>
			<p className="text-break text-justify px-3 py-2">
				{tags.map((tag, index) =>
					<Fragment key={index}><a href={`/tag/${slugify(tag)}`} className="text-dark">#{tag}</a> </Fragment>
				)}
			</p>
		</footer>

		</body>
		</html>
	);
}