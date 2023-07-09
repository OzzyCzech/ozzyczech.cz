export function getSidebarMenu(pages, active, className = '') {
  let menu = '';

  for (const page of pages) {
    if (page?.children) {
      const expanded = active.startsWith(page.slug);
      menu += `<li>
				<button type="button" class="group peer flex justify-between py-1 w-full text-gray-200 font-semibold dark:hover:text-sky-500" aria-expanded="${expanded}">
					<span>${page.name}</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="currentColor"
					  class="transition ease-in-out group-aria-expanded:rotate-90">
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
					</svg>
				</button>
				${getSidebarMenu(page.children, active, `ml-2 hidden peer-aria-expanded:block`)}
			</li>`;
    } else {
      menu += `<li>
	      <a href="${page.slug}" ${page.slug === active ? 'aria-current="page"' : ''}
  		    class="flex py-0.5 w-full dark:hover:text-sky-500 ${page.slug == active ? 'text-sky-500' : ''}">
    		${page.name}
    	</a>
      </li>`;
    }
  }
  return `<ul class="space-y-1 ${className}">${menu}</ul>`;
}

export function getAside(pages, active) {
  return `<nav class="mx-2 my-6 text-gray-300">
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