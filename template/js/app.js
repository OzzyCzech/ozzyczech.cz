document.onreadystatechange = function () {
	if (document.readyState == 'complete') {

		// tables
		var tables = document.getElementsByTagName("table");
		Array.from(tables).forEach(function (table) {
			table.classList.add('table');
			table.classList.add('table-striped');
		});

		// blockquotes
		var blockquotes = document.getElementsByTagName("blockquote");
		Array.from(blockquotes).forEach(function (blockquote) {
			blockquote.classList.add('blockquote');
		});

		var blockquotesFooters = document.querySelectorAll("blockquote em");
		Array.from(blockquotesFooters).forEach(function (footer) {
			footer.classList.add('blockquote-footer');
		});


		// emoji
		twemoji.parse(document.body)
	}
};