import React from 'react';
import Aside from './Aside.js';
import Header from './Header.js';

export default ({tag, posts, tags}) => {
	return (<html lang="cs" dir="ltr" className="dark">
		<head>
			<Header title={`OzzyCzech - tag #${tag}`}/>
		</head>

		<body className="antialiased leading-normal tracking-normal lg:container lg:mx-auto px-0 md:px-2 pt-5 pb-16 dark:bg-gray-900 dark:text-gray-100 min-h-screen">

		<div className="grid grid-cols-1 md:grid-cols-300px gap-4 lg:gap-6">

			<aside>
				<Aside active={`/tag/${tag}`} tags={tags}/>
			</aside>


			<main className="md:order-first">
				<div className="prose lg:prose-xl dark:prose-invert">
					<h1>#{tag}</h1>
				</div>
				<h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-blue-600 dark:text-lime-300 tracking-tight mb-8"></h1>

				<div className="mb-3">
					{posts.map((post, index) =>
						<a className="py-3 px-5 mb-1 block bg-gray-100 hover:bg-gray-200 rounded dark:hover:bg-gray-700 dark:bg-gray-800" href={post.link()} key={index}>
							<span>{post.title}</span>
						</a>,
					)}
				</div>
			</main>
		</div>

		</body>
		</html>
	);
}