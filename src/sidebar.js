export function getSidebarMenu(pages, active, className = '') {
  let menu = '';

  for (const page of pages) {
    if (page?.children) {
      const expanded = active.startsWith(page.slug);
      menu += `<li>
				<button class="flex justify-between w-full px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-950/50 group peer" aria-expanded="${expanded}">
					<span>${page.name}</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" class="transition ease-in-out group-aria-expanded:rotate-90 fill-natural-500 dark:fill-gray-400">
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
					</svg>
				</button>
				${getSidebarMenu(page.children, active, `border-l dark:border-gray-800 p-1 ml-4 hidden peer-aria-expanded:block`)}
			</li>`;
    } else {
      menu += `<li>
	      <a href="${page.slug}" ${page.slug === active ? 'aria-current="page"' : ''}
  		    class="flex px-2.5 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-950/50 w-full ${page.slug == active ? 'dark:bg-gray-950/50 text-sky-500 font-semibold' : ''}">
    		${page.name}
    	</a>
      </li>`;
    }
  }
  return `<ul class="space-y-1 m-2 ${className}">${menu}</ul>`;
}

export function getAside(pages, active) {
  return `<nav>
      ${getSidebarMenu(
    [...pages.filter(page => !page?.children),
      ...pages.filter(page => page?.children).sort((a, b) => a.name.localeCompare(b.name))],
    active
  )}
   </nav>
   
   <script>
     document.querySelectorAll('button[aria-expanded]').forEach(button => {
        button.addEventListener('click', () => {
          button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });
     });
  </script>`;
}