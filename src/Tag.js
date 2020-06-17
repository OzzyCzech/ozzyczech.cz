import React, {Fragment} from 'react'

export default ({slug, title, count}) => {
	return (<Fragment><a href={'/tag/' + slug} className="text-dark tag" title={count}>#{title}</a> </Fragment>);
}
