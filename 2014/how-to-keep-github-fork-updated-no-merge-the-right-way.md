<!--
title: How to keep GitHub Fork Updated (no merge - the right way)
date: 11.2.2014 13:06:30
author: Roman Ožana <ozana@omdesign.cz>
tags: git, github, rebase
-->


# How to keep GitHub Fork Updated (no merge - the right way)

Here is solution how to keep your forks updated [without merge](https://help.github.com/articles/syncing-a-fork) and clean history


    git clone git@github.com:[username]/[repo].git
    git remote add upstream git@github.com:[username2]/[repo].git

 When something change in forked repo 
    git fetch upstream
    git checkout [branch]
    git rebase upstream/[branch]

 #git #github #rebase