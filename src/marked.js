import {marked} from 'marked';
import {basename, dirname, join} from 'node:path';

import Prism from 'prismjs';
import 'prismjs/components/prism-ini.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-less.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-swift.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-php-extras.js';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-yaml.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-markdown.js';
import slugify from '@sindresorhus/slugify';


marked.setOptions({
	highlight: (code, lang) => {
		lang = lang || 'markdown';
		return Prism.highlight(code, Prism.languages[lang], lang);
	},
});

const renderer = {
	image: (src, title, text) => {
		//const className = new URL(href, domain).hash.substring(1).replace(/[_]/g, ' ');
		if (!src.startsWith('/') && !src.startsWith('http')) src = '/' + src; // add leading '/'

		if (src.match(/mp4|webm|mov/)) {
			return `<video loop muted autoplay src="${src}" class="mx-auto rounded"></video>`;
		} else {
			return `<div class="flex justify-center">
							<figure>
								<a href="${src}" target="_blank">
									<img src="${src}" class="rounded shadow bg-white dark:bg-black" title="${title ? title : ''}" alt="${text ? text : ''}"/>
								</a>
								${title || text ? `<figcaption>${title || text}</figcaption>` : ''} 
						</figure>
						</div>`;
		}
	},
	link: (href, title, text) => {
		// Current domain
		if (href.includes('https://ozzyczech.cz') || href.startsWith('/')) {
			return `<a href="${href}" title="${title ? title : ''}">${text}</a>`;
		}

		// YouTube video embed
		if (href.includes('youtube.com') && href === text) {
			const video = new URL(href);
			const id = video.searchParams.get('v');
			if (id) {
				return `<div class="aspect-w-16 aspect-h-9"><iframe src="https://www.youtube.com/embed/${id}?rel=0&controls=1" allowfullscreen></iframe></div>`;
			}
		}

		if (href.endsWith('.md')) {
			return `<a href="${join(dirname(href), `${slugify(basename(href, '.md'))}.html`)}" title="${title ? title : ''}">${text}</a>`;
		}

		// GitHub
		if (href.includes('github.com') && text === href) {
			// @see https://github.com/markedjs/marked/issues/458 - waiting for async
		}

		return `<a href="${href}" title="${title ? title : ''}" target="_blank">${text}</a>`;
	},
};

const extensions = [
	{
		name: 'hashtag',
		level: 'inline',
		start(src) {
			return src.match(/#([\w-]{2,})/)?.index;
		},
		tokenizer(src, tokens) {
			const match = src.match(/^#([\w-]{2,})/);  // Regex for the complete token, anchor to string start
			if (match) {
				return {
					type: 'hashtag',
					raw: match[0],
					tag: match[1],
				};
			}
		},

		renderer(token) {
			return `\n<a href="/tag/${slugify(token.tag.toLowerCase())}">#${token.tag}</a>`;
		},
	},
];

marked.use({renderer, extensions});

export {marked};
