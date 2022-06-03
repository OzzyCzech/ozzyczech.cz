# AutoExpand textarea

```js
import autosize from "https://cdn.jsdelivr.net/npm/autosize@5.0.1/dist/autosize.min.js";

/**
 * WebComponent with autosized textarea
 *
 * @see https://blog.jim-nielsen.com/2020/automatically-resize-a-textarea-on-user-input/
 * @see https://codepen.io/jimniels/pen/MWeawPV
 */
class AutoExpand extends HTMLTextAreaElement {
	constructor() {
		super();
		autosize(this);
	}
}


customElements.define("auto-expand", AutoExpand, {extends: "textarea"});
```

And HTML:

```html
<textarea is="auto-expand"></textarea>
```

#HTML #javascript 