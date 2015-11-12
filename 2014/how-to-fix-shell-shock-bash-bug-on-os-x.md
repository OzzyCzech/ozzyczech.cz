<!--
title: How to fix “Shell Shock” bash bug on OS X
date: 25.9.2014 15:58:39
author: Roman Ožana <ozana@omdesign.cz>
tags: bash, brew, shell
-->


# How to fix “Shell Shock” bash bug on OS X

First try if your bash version it’s vulnerable. Go to terminal and run:


    $ env x='() { :;}; echo vulnerable' bash -c 'echo hello'


 Follow output is an example of a non-vulnerable bash version. 
    bash: warning: x: ignoring function definition attempt
    bash: error importing function definition for `x'
    hello


 If you see the word **vulnerable** in the output of that command your bash is **vulnerable** and you **should update**. ### How to update bash with Homebrew

 First check your bash version: 
    $ bash --version    
    GNU bash, version 4.3.18(1)-release (x86_64-apple-darwin13.3.0)
    Copyright (C) 2013 Free Software Foundation, Inc.


 Then find your bash directory (full path can be usefull later): 
    $ ls -la /usr/local/bin/bash
    /usr/local/bin/bash -> ../Cellar/bash/4.3.25/bin/bash


 Then upgrade bash: 
    $ brew update
    $ brew upgrade bash


 If your terminal starts returning weird error like: 
    dyld: Library not loaded: @@HOMEBREW_PREFIX@@/opt/readline/lib/libreadline.6.dylib
      Referenced from: /usr/local/bin/bash
      Reason: image not found


 You will need upgrade also readline with follow commands: 
    $ brew rm -f readline
    $ brew install readline
    $ brew link readline --force


**Tip**: If you accidentally close **Terminal** before getting above errors and your bash just stop working at all. Go to Terminal preferences`⌘+,` and change bash version to older e.g.`/usr/local/Cellar/bash/4.3.18/bin/bash` then quit Terminal `⌘+Q`. Upgrade readline and change path back to `/usr/local/bin/bash` and restart Terminal again. ![Bash settings](http://www.nabito.net/wp-content/uploads/2014/09/bash_profile.png) #brew #bash #shell