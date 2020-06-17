import React, {Fragment} from 'react'

export default ({slug, title}) => {
	return (<Fragment><a href={'/tag/' + slug} className="text-dark tag">#{title}</a> </Fragment>);
}
