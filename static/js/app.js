document.onreadystatechange = function () {
	if (document.readyState == 'complete') {

		// copy pre > code
		/*
		document.querySelectorAll('pre > code').forEach(function (codeBlock) {
			let copy = document.createElement('a');
			copy.className = 'btn-copy';
			copy.innerText = 'Copy';
			copy.title = 'Copy to Clipboard!';
			copy.href = '#';

			copy.addEventListener('click', function (e) {
				copy.innerText = 'Copied!';
				navigator.clipboard.writeText(codeBlock.innerText).then(function () {
					setTimeout(function () {
						copy.innerText = 'Copy';
					}, 500);
				}, function (err) {
					copy.innerText = 'ERROR';
				});
				e.preventDefault();
				e.stopPropagation();
			}, false);

			codeBlock.parentNode.insertBefore(copy, codeBlock);
		});

		 */

		// https://fusejs.io/ search

		(async () => {
			const response = await fetch('/index.json');
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