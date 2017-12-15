---
title: iMessage like Chat Bubbles with CSS and SVG
date: 2017-12-15
tags: [ios, html, css]
---

# iMessage like Chat Bubbles with CSS and SVG

{{<jsfiddle "https://jsfiddle.net/22qnqub5/">}}

#### HTML code

```html
<article>
  <p class="from-me last">Hi there! What's up?</p>
  <p class="to-me last">Hi, how is it going?!</p>
  <p class="from-me">It's pretty cool!</p>
  <p class="from-me last">Check out this bubble!</p>
</article>
```

#### CSS code

```css
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
}

article {
  padding:20px;
  justify-self: center;
  align-self: center;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 450px;
}

article p {
  font-size: 16px;
  line-height: 1.4;
  margin: 1px 0;
  padding: 8px 17px 6px 13px;
  max-width: 380px;
  position: relative;
  border-radius: 18px;
}

article p:after {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

article p.from-me {
  color: white;
  align-self: flex-end;
  background-color: #1084ff;
}

article p.from-me.last:after {
  
  background: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='15.515px' height='17.5px' viewBox='32.485 17.5 15.515 17.5' enable-background='new 32.485 17.5 15.515 17.5'><path fill='#1084FF' d='M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'/></svg>") right bottom no-repeat;
  right: -6px;
}

article p.to-me {
  color: black;
  align-self: flex-start;
  background-color: #E5E5EA;
}

article p.to-me.last:after {
  background: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='15.515px' height='17.5px' viewBox='32.484 17.5 15.515 17.5' enable-background='new 32.484 17.5 15.515 17.5'><path fill='#E5E5EA' d='M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z'/></svg>") left bottom no-repeat;
  left: -6px;
}
```




