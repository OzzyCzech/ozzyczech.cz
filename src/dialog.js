export const dialog = `<dialog class="w-full mx-auto max-w-2xl transform-all overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all p-0 divide-y divide-gray-500 divide-opacity-20 border-neutral-600 border-1">
		<form>
			<input id="search" type="text" autocomplete="off" placeholder="Search&hellip;" autofocus class="font-normal bg-transparent py-3 px-4 border-0 w-full placeholder:text-neutral-500 focus:ring-0 dark:text-white">
		</form>
		<ul class="dark:text-gray-400 overflow-y-auto max-h-80" id="commands">
		<li class="flex cursor-default select-none items-center px-3 py-2 bg-neutral-700">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" style="margin-right: 1em" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
			<a href="" class="flex-1">Homepage</a>
			<span>cmd+h</span>
		</li>
		<li class="flex cursor-default select-none items-center px-3 py-2">Twitter</li>
		</ul>
		<div class="dark:text-neutral-500 text-sm p-3">
			<p>Search tags <code>#</code></p>
		</div>
	</dialog>`;