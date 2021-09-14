---
title: Jak spočítat počet řádků kódu?
date: 2012-01-07
tags: [bash]
---


# Jak spočítat počet řádků kódu?

V mém příkladu počítám počet řádků PHP kódu:

```shell
grep -v '^ *$' `find . -iname "*.php"` | wc -l
```

Pro zajímavost takový Wordpress má více jak 250 000 řádků PHP.
