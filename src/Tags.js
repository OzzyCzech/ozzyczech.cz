import React from 'react'
import slugify from "@sindresorhus/slugify";

export default ({tags}) => {
	return (<p className="text-right">
			{tags.forEach((tag, index) =>
				<a href={"/tag/" + slugify(tag)} className="text-dark" key={index}>
					#{tag}
				</a>
			)}
		</p>
	);
}