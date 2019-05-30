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
	}
};