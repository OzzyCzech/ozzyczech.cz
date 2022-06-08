import React from 'react';
import {readdirSync} from 'node:fs';
import {join, parse} from 'node:path';
import slugify from '@sindresorhus/slugify';

// TODO add active element selection
const Menu = ({dir, active}) => {
	return (<ul>
		{(readdirSync(dir, {withFileTypes: true})).map((child, index) => {
			if (!child.name.startsWith('.') && !child.name.startsWith('_')) {
				if (child.isDirectory()) {
					return (<li key={index}>
						<button>{child.name}</button>
						<Menu
							dir={join(dir, child.name)}
							active={active}/>
					</li>);
				} else if (child.isFile()) {
					const name = parse(child.name).name;
					const href = join(dir.replace(/^content\/?/, '/').toLowerCase(), slugify(name));
					return (<li key={index}><a href={href}>{name}</a></li>);
				}
			}
		})}</ul>);
};


export default ({dir, active}) => {
	return (<Menu dir={dir} active={active}/>);
}
