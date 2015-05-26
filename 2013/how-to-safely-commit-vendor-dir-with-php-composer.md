<!--
title : How to safely commit vendor dir with php Composer
author : Roman OÅ¾ana <ozana@omdesign.cz>
date : 24.7.2013 10:32:29
tags : composer, git, PHP
-->

# How to safely commit vendor dir with php Composer

[Composer][1]Â is great tool, but sometimes you will need avoid all external dependencies. Sometimes you will need have all source codes in your git repository.

Should I [commit the dependencies][2] in my vendor directory, and still have all benefits of using Composer? Here are my requirements:

  * <span style="line-height: 14px;">Everything need to be automatically.</span>
  * I will work on application and my packages together.
  * I need a simple way how to commit and publish new version of packages.
  * Workflow need to be simple (mimimum of commands)

### How to commit vendor dir?

Remove `vendor`Â dir from your `.gitignore`Â and add follow lines to root of `composer.json`

<pre>"scripts": {
 "post-update-cmd": ["echo [WARNING] Delete all .git dirs", "rm -rf vendor/**/**/.git"],
 "post-install-cmd": ["echo [WARNING] Delete all .git dirs", "rm -rf vendor/**/**/.git"]
},</pre>

That&#8217;s automatically remove the `.git` directory of every dependency after the installation or update.Â You can safely commit everything to your git repo and avoid mistakes with fake git &#8220;submodules&#8221;.

Run: `composer update`Â and commit everything to your repo.

### How make changes in packages?

When you are using tagged releases (no dev versions) of package then run:

`rm -rf vendor/some/package && composer update some/package --prefer-source --no-scripts`

For dev versions (dev-master) it&#8217;s simpler:

`rm -rf vendor/some/package &&Â composer update some/package --no-scripts`

Now, when you go to vendor/some/package dir it&#8217;s common git repository &#8211; you can make changes, commit and publish new versions of package. But don&#8217;t forgot run `composer update`Â before commit main repo, becouse there is still .git dir in package!

### Disadvantages

  * Large VCS repository size and diffs when you update code.
  * Duplication of the history of all your dependencies in your own VCS.
  * There can be conflicts in commits especially when you work in larger team.
  * Still **not avoid commit .git directory** after running composer with `--no-scripts` param.<p</p>

 [1]: http://getcomposer.org/
 [2]: http://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md