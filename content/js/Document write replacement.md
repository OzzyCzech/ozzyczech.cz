---
title: Javascript document.write replacement
date: 2018-11-26
tags: [javascript]
---

# Javascript document.write replacement

Replacement of `document.write` can be combination of [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) method and [document.currentScript](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript) property.

The `insertAdjacentHTML()` method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a **specified position**: 

 - 'beforebegin': Before the element itself.
 - 'afterbegin': Just inside the element, before its first child.
 - 'beforeend': Just inside the element, after its last child.
 - 'afterend': After the element itself.

The `Document.currentScript` property returns the `<script>` element whose script is currently being processed. Best position will be **beforebegin** - new HTML will be inserted before `<script>` itself.

```html
<scritp>
  document.currentScript.insertAdjacentHTML(
    'beforebegin', 
    'this is the document.write alternative'
  );
</script>
```
