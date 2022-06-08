

```
yarn add rss-parser got
```

```js
let Parser = require('rss-parser');
let parser = new Parser();
const got = require('got');

const channel = new URL("https://www.youtube.com/channel/UCRfgHb3W-Nb7uvdX85Bw0AQ").pathname.replace('/channel/', '');

(async () => {

  //let feed = await parser.parseURL('https://www.reddit.com/.rss');
  let feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${channel}`);

  //console.log(`<pre>${JSON.stringify(feed, null, ' ')}</pre>`);

  console.log(`<h1>${feed.title}</h1>`);
  console.log(`<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0"><channel>`);

  for(item of feed.items) {
    const oembed = await got(`https://www.youtube.com/oembed?url=${item.link}&format=json&origin=jsfiddle.net`).json();
    console.log(oembed.html);
  }

})();
```