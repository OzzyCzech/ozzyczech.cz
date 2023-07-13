import {getAside} from './sidebar.js';
import {getDocument} from './document.js';

export function getPageHtml({content, title, slug, path} = {}, pages) {
  return getDocument({
    title,
    main: `

           <article class="prose lg:prose-lg mx-auto dark:prose-invert prose-blue dark:prose-sky prose-a:no-underline hover:prose-a:underline my-6 lg:my-12 p-4">
            ${content}
           </article>
           
            <div class="w-full max-w-prose lg:prose-lg mx-auto border-t dark:border-t-gray-800 py-4 text-right">
              <a href="https://github.com/OzzyCzech/ozzyczech.cz/edit/main/${path}" target="_blank" 
                class="text-gray-500 dark:hover:text-white inline-flex items-center gap-1.5 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
               <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
              </svg>
              Edit on GitHub
              </a>
            </div>
            `,
    aside: getAside(pages, slug),
  });
}