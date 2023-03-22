import {remark} from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import links from './links.js';
import images from './images.js';
import prism from './prism.js';
import video from './video.js';
import hashtags from './hashtags.js';
import linkImages from './link-images.js';

export async function markdown(content) {
	const file = await remark()
		.use(remarkHtml, {sanitize: false})
		.use(remarkGfm)
		.use(links)  // external links
		.use(video)  // video
		.use(images) // images
		.use(hashtags) // syntax highlighting
		.use(prism) // syntax highlighting
		.process(content)

	return String(file);
}