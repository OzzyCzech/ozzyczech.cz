#!/usr/bin/env node --experimental-modules
import {findDown} from 'vfile-find-down';
import {read, write} from 'to-vfile';
import {remark} from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import links from './src/markdown/links.js';
import video from './src/markdown/video.js';
import images from './src/markdown/images.js';
import linkImages from './src/markdown/link-images.js';
import hashtags from './src/markdown/hashtags.js';
import prism from './src/markdown/prism.js';
import {rename} from 'vfile-rename'

await findDown('.md', 'xxxx', async (error, files) => {

	for (let file of files) {
		file = await read(file, 'utf8');

		console.log('file', file);

		file = await remark()
			.use(remarkHtml, {sanitize: false})
			.use(remarkGfm)
			.use(links)  // external links
			.use(video)  // video
			.use(images) // images
			.use(linkImages) // images
			.use(hashtags) // syntax highlighting
			.use(prism) // syntax highlighting
			.use(async (tree, file) => {
				console.log('file', file);
				//file.history.push(file.history[0].replace(/content/, 'public'));
			})
			.process(file);


		console.log(file, String(file));

		//await write(file);
	}
});


