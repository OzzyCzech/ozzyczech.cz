import Fuse from 'https://esm.run/fuse.js';
import hotkeys from 'https://esm.run/hotkeys-js';

class CommandPalette extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<dialog class="w-full mx-auto max-w-2xl transform-all overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all p-0 divide-y divide-gray-500 divide-opacity-20 border-neutral-600 border-1">
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
	}
}

customElements.define('command-palette', CommandPalette);

// https://www.npmjs.com/package/hotkeys-js
// https://craig.is/killing/mice

const dialog = document.querySelector('dialog');
const search = dialog.querySelector('#search');
const form = dialog.querySelector('form');
const commands = dialog.querySelector('#commands');

// close dialog
dialog.addEventListener('click', (event) => {
	if (event.target === dialog) {
		dialog.close();
	}
})

form.addEventListener('submit', (event) => {
	event.preventDefault();
})

// Reset dialog content on close
dialog.addEventListener('close', () => {
	commands.innerHTML = '';
	search.value = '';
});

hotkeys('*', function (event) {
	console.log('do something', event);
});

hotkeys('up,down,left,right', function (e) {
	console.log('aaa');
});


hotkeys('cmd+k', (event, handler) => {

	switch (handler.key) {
		case 'cmd+k':
			dialog.showModal();
			break;
		case 'down':
			console.log('down');
			break;
		case 'up':
			console.log('up');
			break;
	}

	event.preventDefault();
});

const response = await fetch('/fuse.json');
const index = await response.json();

const fuse = new Fuse(index, {
	//findAllMatches: true,
	//includeMatches: true,
	keys: [{name: 'title', weight: 2}, {name: 'tags', weight: 1},],
});

search.addEventListener('input', (event) => {
	event.preventDefault();
	const s = event.currentTarget.value;
	let results = [];

	// search for tags
	if (s.startsWith('#')) {
		results = fuse.search({tags: `=${s}`});
	} else {
		results = fuse.search({title: s});
	}

	commands.innerHTML = '';
	for (const result of results) {
		commands.insertAdjacentHTML('beforeend', `
						<li class="flex cursor-default select-none items-center rounded-md px-3 py-2">
							<a href="${result.item.url}">${result.item.title}</a>
						</li>`);
	}
});

/*
const hotkeys = [
	{
		id: 'home',
		title: 'Homepage',
		hotkey: 'cmd+h',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" style="margin-right: 1em" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
		handler() {
			window.location.href = '/';
		},
	},
	{
		id: 'GitHub',
		title: 'GitHub',
		icon: `<svg width="20" height="20" viewBox="0 0 256 249" style="margin-right: 1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="currentColor"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>`,
		handler() {
			window.open('https://github.com/OzzyCzech/', '_blank');
		},
	},
	{
		id: 'Twitter',
		title: 'Twitter',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style="margin-right: 1em" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>`,
		handler() {
			window.open('https://twitter.com/OzzyCzech', '_blank');
		},
	},
	{
		id: 'StackOverflow ',
		title: 'StackOverflow',
		icon: `<svg viewBox="0 0 169.61 200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-right: 1em" ><path d="M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z" fill="currentColor"/><path d="M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z" fill="currentColor"/></svg>`,
		handler() {
			window.open('https://github.com/OzzyCzech/', '_blank');
		},
	},
	{
		id: 'Email me',
		title: 'Email me',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor" style="margin-right: 1em"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
		handler() {
			window.location.href = 'mailto:roman@ozana.cz';
		},
	}
];*/