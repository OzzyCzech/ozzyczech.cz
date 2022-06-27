import {DateTime} from 'https://esm.run/luxon';
//import Fuse from 'https://esm.run/fuse';

// date time ago
for (const ago of document.querySelectorAll('[data-ago]')) {
	ago.innerText = DateTime.fromISO(ago.dataset.ago).toRelative({locale: 'en'}) + ' at ' + ago.innerText;
}


for (const button of document.querySelectorAll('aside button')) {
	button.addEventListener('click', () => {
		button.nextElementSibling.classList.toggle('hidden');
	});
}

// toggle menu
const toggleButton = document.querySelector('[aria-expanded]');
toggleButton.addEventListener('click', (event) => {
	event.preventDefault();
	for (const item of document.querySelectorAll('[aria-hidden]')) {
		item.classList.toggle('hidden');
	}
});

// show/hide controls on video hover
for (const video of document.querySelectorAll('video')) {
	console.log(video);
	video.addEventListener('mouseenter', () => {
		video.setAttribute('controls', 'controls');
	});

	video.addEventListener('mouseleave', () => {
		video.removeAttribute('controls');
	});
}


// FIXME add search capabilities
// // https://fusejs.io/ search
//
// (async () => {
// 	const response = await fetch('/fuse.json');
// 	const index = await response.json();
//
// 	const fuse = new Fuse(index, {
// 		shouldSort: true,
// 		findAllMatches: true,
// 		threshold: 0.5,
// 		location: 0,
// 		distance: 100,
// 		maxPatternLength: 32,
// 		minMatchCharLength: 1,
// 		keys: [
// 			{name: 'title', weight: 0.8},
// 			{name: 'tags', weight: 0.6},
// 			{name: 'content', weight: 0.3},
// 		],
// 	});
//
//
// 	const q = document.getElementById('q');
// 	const main = document.getElementsByTagName('main')[0];
// 	const mainBackup = main.innerHTML;
//
// 	const search = (event) => {
// 		let results = fuse.search(q.value);
// 		if (q.value.length === 0) {
// 			main.innerHTML = mainBackup;
// 		} else {
// 			main.innerHTML = '<h1 class="h3">Search results:</h1>';
// 		}
//
// 		results.map((page) => {
// 			main.insertAdjacentHTML('beforeend', `
// 						<article>
// 							<h2 class="h1">
// 								<a href="${page.link}">${page.title}</a>
// 							</h2>
// 							<p class="text-secondary small">${page.content}</p>
// 						</article>`);
// 		});
// 		event.preventDefault();
// 	};
//
//
// 	['keyup', 'change'].forEach((e) => {
// 		q.addEventListener(e, (event) => {
// 			search(event);
// 		}, false);
// 	});
//
// })();