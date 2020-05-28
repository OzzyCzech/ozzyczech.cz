import React, {Fragment} from 'react'
import slugify from "@sindresorhus/slugify";

export default ({tags}) => {
	return (
		<Fragment>{[...tags].map((tag, index) =>
			<Fragment key={index}><a href={`/tag/${slugify(tag)}`} className="text-dark tag">#{tag}</a> </Fragment>
		)}</Fragment>
	);
}