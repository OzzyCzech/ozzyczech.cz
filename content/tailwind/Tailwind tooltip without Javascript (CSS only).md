---
title: Tailwind tooltip without Javascript (CSS only)!
date: 2022-03-18
tags: [Tailwind, css]
---

# Tailwind tooltip without Javascript (CSS only)!

There's a plenty of libraries (mostly JavaScript) to enable the classic tooltip design pattern. You can easily add tooltips
to your elements without JavaScript and in just a few lines of [Tailwind](https://tailwindcss.com/) code and HTML.
Lets starts with HTML code:

```html
<div>
  <div class="py-16 text-center dark:bg-gray-800">
    <p class="dark:text-gray-200 pb-3">Hover over button to show tooltip</p>
    <button
      aria-label="Show tooltip content"
      class="px-4 py-2 border dark:border-gray-700 rounded bg-blue-600 text-white font-semibold text-sm shadow">
      Example button
    </button>
  </div>
</div>
```

Then you have to add follow code to your `tailwind.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  [aria-label] {
    @apply relative;
    @apply after:font-sans;
    @apply before:pointer-events-none after:pointer-events-none;
    @apply after:content-[attr(aria-label)] after:font-semibold;
    @apply after:opacity-0 before:opacity-0;
    @apply after:z-50 before:z-50;
    @apply after:absolute before:absolute;
    @apply after:transition-all before:transition-all after:duration-500 before:duration-500;
    @apply after:left-1/2 before:left-1/2;
    @apply after:bottom-full before:bottom-full;
    @apply after:mb-2.5 after:-translate-x-1/2 before:-translate-x-1/2;
    @apply before:content-[''] before:border-[5px] before:w-0 before:h-0;
    @apply hover:before:opacity-100 hover:after:opacity-100;
    @apply hover:before:bottom-full hover:after:bottom-full;
    @apply after:min-w-fit after:whitespace-pre-wrap after:w-max;
  }

  :where([aria-label]) {
    @apply dark:after:bg-gray-500 after:bg-gray-900 after:text-white after:text-sm after:rounded after:py-1 after:px-2;
    @apply before:border-t-gray-900 dark:before:border-t-gray-500 before:border-transparent after:text-center;
  }
}
```

For all visual elements of the tooltip, I use `:where()` [pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:where), which allows us to change 
these parameters later directly from the HTML code.

```html
<button
  class="after:bg-red-500 before:border-t-red-500"
  aria-label="Show red tooltip">Example button</button>
```

Width of the tooltip can be limited with `after:max-w-[180px]` class.

```html
<p aria-label="Fisrt line&#xa;Second line">Example button</p>
```

You can decide where will be break by including `&#xa;` HTML Encoded **Line Feed character** -
new line to the `aria-label` .

```html
<p aria-label="extra long content" class="after:max-w-[180px]">Example button</p>
```

https://play.tailwindcss.com/8QreaqXGBt