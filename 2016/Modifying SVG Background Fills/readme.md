# Modifying SVG Background Fills

We are in age of retina displays, which means that we have entered the vectors age.
You can embed SVG directly to your HTML code and easily alter fill colors add CSS animations and so on.

But what if you want use SVG in CSS background? All wrong! You can't alter the fill color easily within your CSS.
[Here are a few ways around that](http://codepen.io/noahblon/post/coloring-svgs-in-css-background-images), but
all are complicated or require altering SVG.

[Less CSS](http://lesscss.org/) has only few [functions](http://lesscss.org/functions/), but they can gracefully help with that:

```
.svg-background-fill(@src, @fill) {
	@data-uri: data-uri('image/svg+xml;charset=UTF-8', "@{src}");
	background-image: e(
			replace(
          // Follow regular expression remove fill rules from SVG source
          // @data-uri is escaped and therefore you also need escape regular expression
          // 'fill=".*?"|fill:.*?;' ===>
          // escape('fill="'') + '.*?' + escape('"') + '|'
          // escape('fill:') + '.*?' + escape(';')
          replace('@{data-uri}', '(fill%3D%22.*?%22|fill%3A.*?%3B)', '', 'g'),
					escape('<path '),
          escape('<path fill="@{fill}" '),
					"g"
			)
	);
}
```

As you notice `@data-uri` is url-encoded and therefore you also need escape regular expression in same way.
You can use [escape function](http://lesscss.org/functions/#string-functions-escape) and
concat string to get right escaped expression, but much better is prepare [escaped expression manually](http://www.url-encode-decode.com/).

```
a {
  .svg-background-fill('./open.svg', '#fff');
}
```

Thanks for inspiration:
- [Probably Don’t Base64 SVG](https://css-tricks.com/probably-dont-base64-svg/)
- [SVG Background Fill](http://zslabs.com/articles/svg-background-fill/)
- [Coloring SVGs in CSS Background Images](http://codepen.io/noahblon/post/coloring-svgs-in-css-background-images)
