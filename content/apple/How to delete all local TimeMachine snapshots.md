---
title: How to delete all local TimeMachine snapshots
date: 2021-09-14
tags: [macOS, TimeMachine]
---

# How to delete all local TimeMachine snapshots

Your Time Machine backup disk might not always be available, so Time Machine also stores
some of its backups on your Mac. These backups are called local snapshots. 
[Local TimeMachine snapshots](https://support.apple.com/en-us/HT204015)
take a large amount of disk space. This space is listed as
purgeable in disk info, but cannot be actually used until
the system decides to free it up. You can list all local backups with:

```shell
tmutil listlocalsnapshots /
```

Then delete one by one, with follow command:

```shell
sudo tmutil deletelocalsnapshots <snapshot date>
```

You can lists all snaphosts and deletes all of them in a loop:

```shell
for d in $(tmutil listlocalsnapshotdates | grep "-"); do sudo tmutil deletelocalsnapshots $d; done
```