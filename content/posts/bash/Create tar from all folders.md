---
title: Create tar from all folders
date: 2018-10-25
---


# Create tar from all folders

Follow commands create tar archive folder by folder into their own tar so dir becomes *[folder].tar*

**Compressed archive**

```bash
find . -type d -maxdepth 1 -mindepth 1 -exec tar zcvf {}.tar.gz {} \;
```

**Un-coompressed archive**

```bash
find . -type d -maxdepth 1 -mindepth 1 -exec tar cvf {}.tar {}  \;
```
