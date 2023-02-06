# How to keep GitHub Fork Updated (no merge - the right way)

Here is solution how to keep your forks updated [without merge](https://help.github.com/articles/syncing-a-fork) and clean history

```shell
git clone git@github.com:[username]/[repo].git
git remote add upstream git@github.com:[username2]/[repo].git
```

When something change in forked repo

```shell
git fetch upstream
git checkout [branch]
git rebase upstream/[branch]
```

#git #github 