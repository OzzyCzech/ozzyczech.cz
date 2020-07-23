---
title: How to switch Homebrew formulas to older version
date: 2014-10-18
tags: [brew, macOS]
---

# How to switch Homebrew formulas to older version

Sometimes you just won’t be able install latest version of any program and need
some older (e.g. PHP 5.6.1 won’t work and you need install at least 5.6.0 and
getting your work done). As you know all brew formulas are GIT repos, you
can swith to older version easly:

```shell
cd /usr/local/Homebrew/Library/Taps/homebrew
```

There are `homebrew-cask`, `homebrew-core` and `homebrew-services` dirs. You can show logs of a

```shell
cd homebrew-core
git log --pretty="%h - %s" -10
```

```
71b2069 - Update to PHP 5.5.18
b8aeb54 - Use homebrew's openssl for IMAP
f0d721a - php56: improve phpdbg logic
0dc3f1c - Update to PHP 5.6.1
908fedd - Update to Blitz 0.8.12
4801697 - Updates formula for WP CLI  to version 0.17.0
00560f3 - Upgrade php*-swoole to 1.7.5
8cbd369 - Updated PHP_CodeSniffer
a81eba6 - update pecl_http to 2.1.2
6a88856 - Add HEAD url for composer
```

Then just switch

```shell
git checkout 908fedd
```
And then run `brew install php56` and older version PHP will be installed. Procedure can be used for any formulas.


PS: you can always reset everything back with

```shell
brew update-reset
```
