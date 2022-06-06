# Responsive Typography

```css
h1 {
  font-size: calc(2em * var(--text-multiplier, 1));
}

p {
  font-size: calc(1em * var(--text-multiplier, 1));
}

@media (min-width: 48rem) {
  :root {
    --text-multiplier: 1.25;
  }
}
```

#CSS 