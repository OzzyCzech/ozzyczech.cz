---
title: Javascript document.write replacement
date: 2018-11-26
---

# Javascript document.write replacement

```js
document.currentScript.insertAdjacentHTML('beforebegin', 'this is the document.write alternative');
```

* [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
* [currentScript](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript)