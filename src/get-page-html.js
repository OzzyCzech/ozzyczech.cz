import {getAside} from './sidebar.js';
import {getDocument} from './document.js';

export function getPageHtml({content, title, slug} = {}, pages) {
  return getDocument({
    title,
    main: `<article class="prose lg:prose-lg mx-auto dark:prose-invert dark:prose-sky prose-a:no-underline prose-h1:text-white/90 hover:prose-a:underline my-6 lg:my-12 p-4">${content}</article>`,
    aside: getAside(pages, slug),
  });
}