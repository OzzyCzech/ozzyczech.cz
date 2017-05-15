document.onreadystatechange = function () {   
  if (document.readyState == 'complete') {
	var tables = document.getElementsByTagName("table");
	Array.from(tables).forEach(function(table) {
		table.classList.add('table');
		table.classList.add('table-striped');
		table.classList.add('table-condensed');
	});
  }
}