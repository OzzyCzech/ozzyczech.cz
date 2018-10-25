---
title: Create tar from all folders
date: 2018-10-25
---


# Create tar from all folders


Follow command tar folder by folder ro separate archive.

## Compressed archive

```bash
find . -type d -maxdepth 1 -mindepth 1 -exec tar zcvf {}.tar.gz {} \;
```

## Un-coompressed archive

```bash
find . -type d -maxdepth 1 -mindepth 1 -exec tar cvf {}.tar {}  \;
```
