import React, {Fragment} from 'react';

export default ({slug, title, count}) => {
	return (
		<Fragment>
			<a href={'/tag/' + slug} className="inline-block font-medium py-1 px-2 mr-1 mb-1 lowercase rounded align-middle text-gray-500 hover:text-gray-600 dark:hover:text-gray-400" title={count}>#{title}</a>
		</Fragment>
	);
}
