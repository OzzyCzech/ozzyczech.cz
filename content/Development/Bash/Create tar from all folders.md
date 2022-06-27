# Create tar from all folders

Follow commands create tar archives folder by folder into their own tar - so folder becomes *folder.tar*

**Compressed archive**

```shell
find . -type d -maxdepth 1 -mindepth 1 -exec tar zcvf {}.tar.gz {} \;
```

**Un-coompressed archive**

```shell
find . -type d -maxdepth 1 -mindepth 1 -exec tar cvf {}.tar {}  \;
```

#tag #bash 