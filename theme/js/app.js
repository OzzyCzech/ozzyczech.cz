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

		// blockquotes
		var blockquotes = document.querySelectorAll("article blockquote");
		Array.from(blockquotes).forEach(function (blockquote) {
			blockquote.classList.add('blockquote');
		});
		var blockquotesFooters = document.querySelectorAll("blockquote em");
		Array.from(blockquotesFooters).forEach(function (footer) {
			footer.classList.add('blockquote-footer');
		});
	}
};