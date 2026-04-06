---
title: How to Create Tar Archives for Each Folder in a Directory
sidebar:
  label: Create tar of all folders
---

The following commands create tar archives folder by folder into their own tar — so each folder becomes `folder.tar`.

**Compressed archive**

```shell
find . -type d -maxdepth 1 -mindepth 1 -exec tar zcvf {}.tar.gz {} \;
```

**Uncompressed archive**

```shell
find . -type d -maxdepth 1 -mindepth 1 -exec tar cvf {}.tar {}  \;
```
