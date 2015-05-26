<!--
title : How to keep GitHub Fork Updated (no merge – the right way)
author : Roman Ožana <ozana@omdesign.cz>
date : 11.2.2014 12:06:30
tags : git, github, rebase
-->

# How to keep GitHub Fork Updated (no merge – the right way)

Here is solution how to keep your forks updated [without merge][1]� and clean history

    git clone git@github.com:[username]/[repo].git
    git remote add upstream git@github.com:[username2]/[repo].git

When something change in forked repo

    git fetch upstream
    git checkout [branch]
    git rebase upstream/[branch]<p</p>

 [1]: https://help.github.com/articles/syncing-a-fork