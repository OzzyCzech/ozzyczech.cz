# Fetch in pure Node.js

There are a lot of popular Node.js modules for requestiong data with HTTP or HTTPS (e.g. [axios](https://github.com/axios/axios), [got](https://github.com/sindresorhus/got), [node-fetch](https://github.com/node-fetch/node-fetch)), but you **don't need them**! You can easily made HTTP/HTTPS requests in Node.js with [http.get](https://nodejs.org/api/http.html#http_http_get_options_callback) or [https.get](https://nodejs.org/api/https.html#https_https_get_options_callback):

```javascript
import https from "https";

module.exports = (params, postData) => new Promise((resolve, reject) => {
	const req = https.request(params, (res) => {

		// reject on bad status
		if (res.statusCode < 200 || res.statusCode >= 300) {
			return reject(new Error('statusCode=' + res.statusCode));
		}

		// read data
		let body = [];
		res.on('data', chunk => {
			body.push(chunk);
		});

		res.on('end', () => {
			try {
				body = Buffer.concat(body).toString();
			} catch (e) {
				reject(e);
			}
      
			resolve(body); // submit data
		});
	});

	req.on('error', (err) => {
		reject(err);
	});

	if (postData) {
		req.write(postData);
	}

	req.end(); // close request
});
```

Then just call this:

```javascript
import fetch from './fetch'

(async () => {
  const content = await fetch('https://example.com');
  console.log(content);
})();
```

Happy nodescripting! 

#nodejs