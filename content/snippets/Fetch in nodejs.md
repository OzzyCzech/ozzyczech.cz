# Fetch in nodejs

```javascript
#!/usr/bin/env node --experimental-modules

import https from 'https'; // or http if you need

async function fetch(url) {
	return new Promise((resolve, reject) => {
		const request = https.get(url, {timeout: 1000}, (res) => {
			if (res.statusCode < 200 || res.statusCode > 299) {
				return reject(new Error(`HTTP status code ${res.statusCode}`));
			}

			const body = [];
			res.on('data', (chunk) => body.push(chunk));

			res.on('end', () => {
				resolve(Buffer.concat(body).toString());
			});
		});

		request.on('error', (err) => {
			reject(err);
		});

		request.on('timeout', () => {
			request.destroy();
			reject(new Error('timed out'));
		});
	});
}

const html = await fetch('https://ozana.cz');
```

#nodejs