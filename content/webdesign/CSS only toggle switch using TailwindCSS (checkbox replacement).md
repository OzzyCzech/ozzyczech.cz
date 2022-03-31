---
title: CSS only toggle switch using TailwindCSS (checkbox replacement)
date: 2022-03-31
tags: [Tailwind, css]
---

# CSS only toggle switch using TailwindCSS (checkbox replacement)

<video width="320" height="240" loop muted autoplay class="mx-auto">
  <source src="/webdesign/css-only-toggle.mp4" type="video/mp4">
</video>

Learn how to create toggle switch (on/off button) from `<input type="checkbox">`.
Let's starts with a simple HTML code:

```html
<label for="one">
  <input id="one" type="checkbox" />
  This is radio checkbox
</label>
```

Then you have to add follow code to your `tailwind.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  label {
    @apply inline-flex align-middle;
  }

  [type="checkbox"] {
    @apply w-11 h-0 cursor-pointer inline-block focus:outline-0 dark:focus:!outline-0;
    @apply border-0 dark:border-0;
    @apply focus:ring-offset-transparent dark:focus:ring-offset-transparent;
    @apply focus:ring-transparent dark:focus:ring-transparent;
    @apply focus-within:ring-0 dark:focus-within:ring-0;
    @apply focus:shadow-none dark:focus:shadow-none;

    @apply after:absolute before:absolute;
    @apply after:block before:inline-block;
    @apply before:rounded-full after:rounded-full;

    @apply after:content-[''] after:w-5 after:h-5 after:mt-0.5 after:ml-0.5;
    @apply after:shadow-md after:duration-100;

    @apply before:content-[''] before:w-10 before:h-6;
    @apply before:shadow-[inset_0_0_#000];

    @apply after:bg-white dark:after:bg-gray-50;
    @apply before:bg-gray-300 dark:before:bg-gray-600;
    @apply before:checked:bg-lime-500 dark:before:checked:bg-lime-500;
    @apply checked:after:duration-300 checked:after:translate-x-4;

    @apply disabled:after:bg-opacity-75 disabled:cursor-not-allowed;
		@apply disabled:checked:before:bg-opacity-40;
  }
}
```

https://play.tailwindcss.com/eVYORthSSl