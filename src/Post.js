import React from 'react';
import Tag from './Tag.js';
import slugify from '@sindresorhus/slugify';

export default ({page, single}) => {
	return (
		<article className={`rounded dark:bg-gray-800 p-3 lg:px-16 lg:py-10 mb-3 lg:mb-6 border dark:border-gray-800 shadow-sm ${page.slug}`}>

			{
				single ?
					<h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-blue-600 dark:text-lime-300 tracking-tight mb-3 lg:mb-8">{page.title}</h1> :
					<h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-blue-600 dark:text-lime-300 tracking-tight mb-3 lg:mb-8"><a href={page.link()}>{page.title}</a></h2>
			}

			<div dangerouslySetInnerHTML={{__html: page.content.replace(/<h1.*>.*?<\/h1>/g, '')}}></div>

			{page.tags.size > 0 && <p className="text-right">
				{[...page.tags].map((tag, index) => <Tag key={index} title={tag} slug={slugify(tag)}/>)}
			</p>}
		</article>
	);
}

/*
<small>{page.date.getDate()}.&nbsp;{page.date.getMonth() + 1}.&nbsp;{page.date.getFullYear()}</small>

				<small className="d-block float-end text-secondary">{page.date.getDate()}.&nbsp;{page.date.getMonth() + 1}.&nbsp;{page.date.getFullYear()}</small>{' '}

<article >
	<div className="content" dangerouslySetInnerHTML={{__html: page.content.replace(/<h1.*>.*?<\/h1>/g, '')}}></div>
	{page.tags.size > 0 && <p className="text-right">
		<small>{page.date.getDate()}.&nbsp;{page.date.getMonth() + 1}.&nbsp;{page.date.getFullYear()}</small>
		{[...page.tags].map((tag, index) => <Tag key={index} title={tag} slug={slugify(tag)}/>)}
	</p>}
</article>
 */