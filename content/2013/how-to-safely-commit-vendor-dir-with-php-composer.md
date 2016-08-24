---
title: How to safely commit vendor dir with php Composer
date: 24.7.2013 12:32:29
author: Roman Ožana <ozana@omdesign.cz>
tags: composer, git, PHP
---


# How to safely commit vendor dir with php Composer

[Composer](http://getcomposer.org/) is great tool, but sometimes you will need avoid all external dependencies. Sometimes you will need have all source codes in your git repository. Should I [ commit the dependencies](http://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md) in my vendor directory, and still have all benefits of using Composer? Here are my requirements: - Everything need to be automatically.
- I will work on application and my packages together.
- I need a simple way how to commit and publish new version of packages.
- Workflow need to be simple (mimimum of commands)

### How to commit vendor dir?

 Remove `vendor` dir from your `.gitignore` and add follow lines to root of `composer.json`
    "scripts": {
     "post-update-cmd": ["echo [WARNING] Delete all .git dirs", "rm -rf vendor/**/**/.git"],
     "post-install-cmd": ["echo [WARNING] Delete all .git dirs", "rm -rf vendor/**/**/.git"]
    },


 That's automatically remove the `.git` directory of every dependency after the installation or update. You can safely commit everything to your git repo and avoid mistakes with fake git "submodules". Run: `composer update` and commit everything to your repo. ### How make changes in packages?

 When you are using tagged releases (no dev versions) of package then run:     rm -rf vendor/some/package && composer
    update some/package --prefer-source --no-scripts
 For dev versions (dev-master) it's simpler:     rm -rf
    vendor/some/package && composer update some/package
    --no-scripts
 Now, when you go to vendor/some/package dir it's common git repository - you can make changes, commit and publish new versions of package. But don't forgot run `composer update` before commit main repo, becouse there is still .git dir in package! ### Disadvantages

- Large VCS repository size and diffs when you update code.
- Duplication of the history of all your dependencies in your own VCS.
- There can be conflicts in commits especially when you work in larger team.
- Still **not avoid commit .git directory** after running composer with `--no-scripts` param.

 #composer #git #php