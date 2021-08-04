import React, {Fragment} from 'react'

export default ({slug, title, count}) => {
	return (
		<Fragment>
			<a href={'/tag/' + slug} className="inline-block font-medium py-1 px-2 mt-1 rounded align-middle text-gray-500" title={count}>#{title}</a>
		</Fragment>
	);
}
