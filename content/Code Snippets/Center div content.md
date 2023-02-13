# Center div content

## Flexbox

```css
div {	
	display: flex;
	justify-content: center;
	align-items: center;
}
```

with [Tailwind](https://play.tailwindcss.com/C1ZhLc4jle)

```html
<div class="flex justify-center items-center w-full h-screen">
	<p>center</p>
</div>
```

## Grid

```css
div {
	display: grid;
	place-items: center;
}
```

with [Tailwind](https://play.tailwindcss.com/YleaVnoPIN)

```html
<div class="grid place-content-center w-full h-screen">
  <p>center</p>
</div>
```

## Absolute/relative position

```css
div {
	position: relative;
}

p {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

with [Tailwind](https://play.tailwindcss.com/93dDkcY82t)

```html
<div class="relative w-full h-screen">
  <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">center</p>
</div>
```