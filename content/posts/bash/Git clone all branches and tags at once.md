---
title: Git clone all branches at once
date: 2017-08-11
tags: [bash, git]
---


# Git clone all branches and tags at once

Follow script clone all branches and tags at once:

```bash
#!/bin/bash
git fetch --all --tags
for branch in `git branch -r --format="%(refname:short)" | grep -v origin/master | grep -v origin/HEAD | sed 's/origin\///'`
  do git branch -f --track "$branch" "origin/$branch"
done
```

Single line version:

```bash
git fetch --all --tags; for branch in `git branch -r --format="%(refname:short)" | grep -v origin/master | grep -v origin/HEAD | sed 's/origin\///'`; do git branch -f --track "$branch" "origin/$branch" ; done ;
```


## Motivation?

This command is super usefull when you need copy repo between remotes:

```bash
git remote add alternative git@github.com:....git 
```

Check if is there another remote:

```bash
git remote -v
> origin	git@github.com:.../....git (fetch)
> origin	git@github.com:.../....git (push)
> alternative	git@github.com:.../....git (fetch)
> alternative	git@github.com:.../....git (push)
```

Push all changes to **alternative** remote

```bash
git push alternative --all # push all braneches
git push alternative --tags # push all tags
```