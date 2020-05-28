import React from 'react'

export default ({page}) => {
	return (<aside>
			<section className="card">
				<div className="card-body text-center">

					<a href="/">
						<img src="https://www.gravatar.com/avatar/78a2dc1230226b0c47af6c99a3148794?s=128" className="rounded-circle shadow-lg mb-3" alt="Roman Ožana"/>
					</a>

					<h5 className="card-title">
						Hi, <a href="https://omdesign.cz" target="_blank" className="text-reset">I am Roman!</a>
					</h5>

					<div className="social-media">
						<a href="https://github.com/OzzyCzech/" target="_blank">GitHub</a>
						<span className="mx-1">•</span>
						<a href="https://meta.stackoverflow.com/users/355316/" target="_blank">StackOverflow</a>
						<span className="mx-1">•</span>
						<a href="https://www.twitter.com/OzzyCzech" target="_blank">Twitter</a>
					</div>
				</div>
			</section>

			<section className="list-group">
				<a className="list-group-item list-group-item-action" href="/"><span className="mr-3">🏠</span>Home</a>
				<a className="list-group-item list-group-item-action" href="/photo"><span className="mr-3">📷</span>Photo</a>
				<a className="list-group-item list-group-item-action" href="/apple"><span className="mr-3"></span>Apple</a>
				<a className="list-group-item list-group-item-action" href="/js"><span className="mr-3">🥕</span>Javascript</a>
				<a className="list-group-item list-group-item-action" href="/links"><span className="mr-3">🔗</span>Links</a>
				<a className="list-group-item list-group-item-action" href="/books"><span className="mr-3">📘</span>Books</a>
				<a className="list-group-item list-group-item-action" href="/series"><span className="mr-3">🎞</span>Series</a>
				<a className="list-group-item list-group-item-action" href="/tag/recepty"><span className="mr-3">👨‍🍳</span>Recepty</a>
				<a className="list-group-item list-group-item-action" href="/quotes"><span className="mr-3">🗣</span>Quotes</a>
			</section>

		</aside>
	);
}
