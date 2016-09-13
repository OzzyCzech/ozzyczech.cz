# Take screenshot with Express and phantomjs

```
var express = require('express');
var phantom = require('phantom');
var app = express()

app.use(express.static(__dirname + '/public'));

// setup express
//app.use(express.compress());
//app.use(express.static(public_dir));
//app.use(express.json());
//app.use(express.urlencoded());

app.get('/', function (req, res) {

	var url = 'https://www.google.com/';

	var sitepage = null;
	var phInstance = null;


	phantom.create(['--ignore-ssl-errors=yes', '--ssl-protocol=any', '--load-images=yes', '--local-to-remote-url-access=yes'], {logLevel: 'error'})
			.then(instance => {
				phInstance = instance;
				return instance.createPage();
			})
			// Configure page
			.then(page => {
				sitepage = page;
				sitepage.setting('paperSize', {format: "A4", orientation: 'portrait', margin: '1cm', width: 795, height: 1125});
				sitepage.property('viewportSize', {width: 1280, height: 1020});
				return page.open(url);
			})
			.then(status => {
				if (status === 'success') {
					return sitepage.render(__dirname + '/public/output.png');
				}
			})
			.then(rendered => {
				if (rendered === true) {
					res.download(__dirname + '/public/output.png');
				} else {
					res.status(404).json({error:true, message: "404 Not Found"});
				}

				sitepage.close();
				phInstance.exit()
			})
			.catch(error => {
				res.status(404).json({error: true, message: error});
				phInstance.exit();
			});

});

app.listen(process.env.PORT || 3030);

```
