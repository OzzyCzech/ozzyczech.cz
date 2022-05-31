import React from 'react';
import Tag from './Tag.js';
import slugify from '@sindresorhus/slugify';

export default ({page, single}) => {
	return (
		<article className={`rounded dark:bg-gray-800 p-3 lg:px-16 lg:py-10 mb-3 lg:mb-6 border dark:border-gray-800 shadow-sm ${page.slug}`}>

			<div dangerouslySetInnerHTML={{__html: single ? page.content : page.content.replace(/(<h1.*>.*?<\/h1>)/, `<a href="${page.link()}" class="no-underline">$1</a>`)}}
			     className="
						prose
			      lg:prose-xl
			      dark:prose-invert

						prose-a:no-underline
						prose-a:text-violet-500
						hover:prose-a:underline
			      my-3 max-w-none"></div>

			{page.tags.size > 0 && <p className="text-right">
				{[...page.tags].map((tag, index) => <Tag key={index} title={tag} slug={slugify(tag)}/>)}
			</p>}
		</article>
	);
}