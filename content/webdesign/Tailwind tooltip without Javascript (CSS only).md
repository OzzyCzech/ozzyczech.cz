---
title: Tailwind tooltip without Javascript (CSS only)!
date: 2022-03-18
tags: [Tailwind, css]
---

# Tailwind tooltip without Javascript (CSS only)!

You can easily add tooltips to your elements without JavaScript and in just a few lines of [Tailwind CSS](https://tailwindcss.com/) code. Lets starts with HTML code:

```html
<div class="dark">
  <div class="py-64 text-center dark:bg-gray-800">
    <p class="dark:text-gray-200 pb-3">Hover over button to show tooltip</p>
    <button aria-label="Show tooltip content" class="px-4 py-2 border dark:border-gray-700 rounded bg-blue-600 text-white font-semibold text-sm shadow">Example button</button>
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
    @apply before:pointer-events-none after:pointer-events-none;
    @apply after:content-[attr(aria-label)] after:font-semibold after:shadow-lg;
    @apply after:opacity-0 before:opacity-0;
    @apply after:z-50 before:z-50 after:whitespace-nowrap;
    @apply after:absolute before:absolute;
    @apply dark:after:bg-gray-500 after:bg-gray-900 after:text-white after:text-sm after:rounded after:py-1 after:px-2;
    @apply after:transition-all before:transition-all after:duration-500 before:duration-500;
    @apply after:left-1/2 before:left-1/2;
    @apply after:bottom-full before:bottom-full;
    @apply after:mb-2.5 after:-translate-x-1/2 before:-translate-x-1/2;
    @apply before:content-[''] before:border-[5px] before:border-transparent before:border-t-gray-900 dark:before:border-t-gray-500 before:w-0 before:h-0;
    @apply hover:before:opacity-100 hover:after:opacity-100;
    @apply hover:before:bottom-full hover:after:bottom-full;
  }
}
```

All HTML elements with the `aria-label` attribute will then display a simple tooltip above them when hovered over. 
Tooltip is fully customizable right from HTML:

```html
<button 
  class="tooltip after:!bg-red-600 before:!border-t-red-600"
  aria-label="Show red tooltip">Example button</button>
```

https://play.tailwindcss.com/VKQ44KqUCz