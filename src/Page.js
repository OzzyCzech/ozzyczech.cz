import React from 'react';
import Aside from './Aside.js';
import Header from './Header.js';
import Post from './Post.js';

export default ({page, tags}) => {
	return (<html lang="cs" dir="ltr" className="dark">
	<head>
		<Header title={page.title.trim()}/>
	</head>

	<body className="antialiased leading-normal tracking-normal lg:container lg:mx-auto px-0 md:px-2 pt-5 pb-16 dark:bg-gray-900 dark:text-gray-100 min-h-screen">

	<div className="grid grid-cols-1 md:grid-cols-300px gap-4 lg:gap-6">

		<aside>
			<Aside active={'/' + page.slug} tags={tags}/>
		</aside>

		<main className="md:order-first">
			<Post page={page} single={true}/>

			<ul className="flex flex-row text-gray-500 gap-2">
				<li>last change <span data-ago={new Date(page.date).toISOString()}>{(new Date(page.date)).toLocaleDateString('cs-CZ')}</span></li>
				<li>
					<a
						href={`https://raw.githubusercontent.com/OzzyCzech/ozzyczech.cz/main/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`}
						target="_blank"
						className="bg-gray-800 hover:text-gray-200 hover:bg-gray-700 inline-block px-1.5 rounded-sm">raw</a>
				</li>
				<li><a
					href={`https://github.com/OzzyCzech/ozzyczech.cz/edit/main/${encodeURI(page.dir)}/${encodeURI(page.base)}${encodeURI(page.ext)}`}
					target="_blank"
					className="bg-gray-800 hover:text-gray-200 hover:bg-gray-700 inline-block px-1.5 rounded-sm">edit</a>
				</li>
			</ul>

		</main>

	</div>

	</body>
	</html>);
}