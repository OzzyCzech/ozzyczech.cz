---
title: Simple events dispatcher
---

`Events` are simple pure functional **event dispatching library** for PHP 5.5+ and
have nice and clear interface with function `on()`, `one()`, `off()`, `trigger()`,
`filter()`, `ensure()`, `listeners()`, `events()` - that's all!

With **sphido/events** can:

- listeners prioritization
- add/remove listeners
- filter values by functions
- stop propagation in function chain
- and have event default handler

## Trigger event

```php
on('event', function () {
  echo "wow it's works yeah!";
});

trigger('event'); // print wow it's works yeah!
```

Hardcore simple events for PHP with filter, prioritizing, removing handlers and
stop propagation. It's even simpler then my previous version https://github.com/OzzyCzech/events.
