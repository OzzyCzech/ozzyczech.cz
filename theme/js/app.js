document.onreadystatechange = function () {
	if (document.readyState == 'complete') {

		// tables
		var tables = document.querySelectorAll("article table");
		Array.from(tables).forEach(function (table) {
			table.classList.add('table');
			table.classList.add('table-striped');
		});

		// images
		var images = document.querySelectorAll("article img");
		Array.from(images).forEach(function (img) {
			img.classList.add('img-fluid');
		});


		// remove subdomain of current site's url and setup regex
		var internal = new RegExp(location.host, "i");

		var a = document.getElementsByTagName('a'); // then, grab every link on the page
		for (var i = 0; i < a.length; i++) {
			var href = a[i].host;
			if (!internal.test(href)) {
				a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
			}
		}
	}
};