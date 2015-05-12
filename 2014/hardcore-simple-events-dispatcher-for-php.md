<!--
title : Hardcore Simple Events Dispatcher for PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 5.10.2014 19:49:49
tags : events, PHP
-->

# Hardcore Simple Events Dispatcher for PHP

Sphido events is simple pure functional **event dispatching library** for PHP 5.5+ and have nice and clear interface with function `on()`, `off()`, `fire()`, `filter()`, `care()`, `once()`, `listeners()`, `events()` - that's all.

With events can:

- prioritizing listeners
- add/remove listeners
- filter values by functions
- stop propagation in function chain
- and have default handler

## Fire event

```php
on('event', function () {
  echo "wow it's works yeah!";
});

fire('event'); // print wow it's works yeah!
```

Download from https://github.com/sphido/events