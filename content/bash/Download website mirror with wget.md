---
title: Download website mirror with wget
date: 2018-12-13
tags: [wget]
---

# Download website mirror with wget

```shell
wget --mirror \
     --convert-links \
     --adjust-extension \
     --page-requisites \
     --no-parent \
     --no-check-certificate http://example.com
```
