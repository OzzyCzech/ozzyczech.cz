// for the search only version
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.5.3/dist/fuse.esm.js'
import {dateFns} from 'https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js'

function showDate(date) {
	document.currentScript.insertAdjacentHTML(
		'beforebegin',
		`${dateFns.distanceInWords(date, new Date())} at ${new Intl.DateTimeFormat().format(date)}`,
	);
}

function toggleMenu() {
	const toggleButton = document.querySelector('[aria-expanded]');
	toggleButton.addEventListener('click', (e) => {
		e.preventDefault();
		Array.from(document.querySelectorAll('[aria-hidden]')).forEach((item) => {
			item.classList.toggle('hidden');
		});
	});
}

document.onreadystatechange = function () {
	if (document.readyState == 'complete') {
		toggleMenu();

		// https://fusejs.io/ search

		(async () => {
			const response = await fetch('/fuse.json');
			const index = await response.json();

			const fuse = new Fuse(index, {
				shouldSort: true,
				findAllMatches: true,
				threshold: 0.5,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: [
					{name: "title", weight: 0.8},
					{name: "tags", weight: 0.6},
					{name: "content", weight: 0.3}
				]
			});


			const q = document.getElementById('q');
			const main = document.getElementsByTagName("main")[0];
			const mainBackup = main.innerHTML;

			const search = (event) => {
				let results = fuse.search(q.value);
				if (q.value.length === 0) {
					main.innerHTML = mainBackup;
				} else {
					main.innerHTML = '<h1 class="h3">Search results:</h1>';
				}

				results.map((page) => {
					main.insertAdjacentHTML("beforeend", `
						<article>
							<h2 class="h1">
								<a href="${page.link}">${page.title}</a>
							</h2>
							<p class="text-secondary small">${page.content}</p>
						</article>`);
				});
				event.preventDefault();
			};


			['keyup', 'change'].forEach((e) => {
				q.addEventListener(e, (event) => {
					search(event)
				}, false)
			});

		})();

	}
};