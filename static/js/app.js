import './command-palette.js';
import {DateTime} from 'https://esm.run/luxon';

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