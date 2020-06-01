import React from 'react'
import {parse} from 'twemoji-parser'
// @see https://twemoji.maxcdn.com/2/test/preview.html

export default ({from}) => {
	const em  = parse(from);
	return (
		<>
			<img src={em[0].url} alt={em[0].text} className="mr-3" width="20" height="20" />
		</>
	);
}