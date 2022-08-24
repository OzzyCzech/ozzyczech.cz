# Advanced tasks with Homebrew

### Install specific cask version

```bash
cd /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask
```

Then show history of selected formula like:

```bash
git log master -- Casks/phpstorm.rb
```

and you will get hashes of each commit (change) that was made in this formula:

```text
commit d49e3f36f3c7844c580d04d46a71cfd5d10f56c3
Author: jcbot <jcb@leipert.io>
Date:   2020-07-22

    Update phpstorm to 2020.1.4,201.8743.18 (#86377)

commit fe7ff338780dd1a4ebb14086ca0c82d8e865874b
Author: jcbot <jcb@leipert.io>
Date:   2020-07-08

    Update phpstorm to 2020.1.3,201.8538.41 (#85574)

commit 7476855299dc91eae6d72e1018900783e3c56a8b
Author: jcbot <jcb@leipert.io>
Date:   2020-06-03

    Update phpstorm to 2020.1.2,201.7846.90 (#83674)

commit 2c625cbfbd167829b6e607106fbcbac636ac2eb7
Author: jcbot <jcb@leipert.io>
Date:   2020-04-30

    Update phpstorm to 2020.1.1,201.7223.96 (#81664)
```

Then you can `install` or `reinstall` selected version like:

```shell
brew cask reinstall https://raw.githubusercontent.com/caskroom/homebrew-cask/2c625cbfbd167829b6e607106fbcbac636ac2eb7/Casks/phpstorm.rb
```

### Switch Homebrew all formulas to older version

Sometimes you just won’t be able install latest version of any program and need
some older (e.g. PHP 5.6.1 won’t work and you need install at least 5.6.0 and
getting your work done). As you know all brew formulas are GIT repos, you
can swith to older version easly:

```shell
cd /usr/local/Homebrew/Library/Taps/homebrew
```

There are `homebrew-cask`, `homebrew-core` and `homebrew-services` dirs:

```shell
cd homebrew-core
git log --pretty="%h - %s" -10
```

```text
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

### Reset everything back

PS: you can always reset everything back to normal with follow command

```shell
brew update-reset
```

#macOS #brew