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
	}
};