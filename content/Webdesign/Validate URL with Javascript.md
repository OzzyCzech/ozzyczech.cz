# Validate URL with Javascript

Following is a simple function to validate a URL with Javascript. It will return the URL if it is valid, otherwise it will return `undefined`.

```javascript
function getValidUrl(url) {
	url = url
		// remove spaces
		.replaceAll(/\s/g, '')
		// [anything]://google.com -> https://google.com
		// ://google.com -> https://google.com
		// //google.com -> https://google.com
		// /google.com -> https://google.com
		// google.com -> https://google.com
		.replace(/^(?!https?:)(.*?):\/\/|^(?!https?:)\/?\/?/, 'https://');

	// Perfectly valid URL
	if (URL.canParse(url)) {
		const u = new URL(url);

		// hostname can't start with a dot
		if (/^(?!\.)[a-zA-Z\d-.]{1,253}\.?$/.test(u.hostname)) {
			return u.toString();
		}
	}
}
```