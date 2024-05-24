---
title: Take a screenshot of a website
description: Capture website with Google Chrome and save it as a screenshot or PDF
sidebar:
  label: Website screenshot
---

### With Google Chrome

You can capture a website with Google Chrome using the following command:

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \ 
  --headless --disable-gpu \ 
  --screenshot --hide-scrollbars --virtual-time-budget=2000 \
  --window-size=1920,1428 \ 
  https://www.apple.com
```

or you can print whole page to PDF:

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \ 
  --headless --disable-gpu \
  --no-pdf-header-footer --no-margins \ 
  --virtual-time-budget=2000 \
  --run-all-compositor-stages-before-draw
  --print-to-pdf="~/Downloads/apple.pdf" \ 
  https://www.apple.com
```