document.onreadystatechange = function () {
	if (document.readyState == 'complete') {

		// tables
		const tables = document.querySelectorAll("article table");
		Array.from(tables).forEach(function (table) {
			table.classList.add('table', 'table-striped');
		});

		// remove subdomain of current site's url and setup regex
		const internal = new RegExp(location.host, "i");

		var a = document.getElementsByTagName('a'); // then, grab every link on the page
		for (var i = 0; i < a.length; i++) {
			let href = a[i].host;
			if (!internal.test(href)) {
				a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
			}
		}



		// copy pre > code
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
			});

			codeBlock.parentNode.insertBefore(copy, codeBlock);
		});

	}
};