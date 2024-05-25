---
title: Backup git repository
sidebar:
  label: Backup git repository
---

Git is capable of "bundling" its data into a single file. The [bundle command](https://git-scm.com/docs/git-bundle)
will package up everything that would normally be pushed over the wire with a git push command
into a binary file that you can email to someone or put on a flash drive, then unbundle into another repository.

Following bash function will clone repository and create one
signle bundle file with nice name:

```shell
#!/bin/bash

function git_backup() {	
	target=$(echo ${1#*:} | tr / _)		
	git clone --mirror $1 ${target} && cd ${target}
	git bundle create ${2-../}/${target%%.git}.bundle --all
	cd - && rm -rf ${target}
}
```

Usage:

```shell
git_backup git@github.com:OzzyCzech/dotfiles.git ~/Downloads/
```

PS: Note that **git bundle** only copies commits that lead to some reference
(branch or tag) in the repository. So *tangling commits* are not stored
to the bundle.

You can also create nice alias in `.gitconfig` file:

```ini
[alias]
backup = "!gb() { target=$(echo ${1#*:} | tr / _); git clone --mirror $1 ${target} && cd ${target}; git bundle create ${2-../}/${target%%.git}.bundle --all; cd - && rm -rf ${target}; }; gb"
```

Backup alias can be also found in my [dotfiles](https://github.com/OzzyCzech/dotfiles/blob/main/.gitconfig) repository.


## Restore

You can difectly clone repository from bundle file:

```shell
git clone my-super-file.bundle directory
```

Or you can create empty repository and pull from bundle file:

```shell
git init directory
cd directory
git pull my-super-file.bundle
```

## Backup whole GitHub account

You can use [GitHub API](https://developer.github.com/v3/repos/) to get list of
all [user repos](https://api.github.com/users/OzzyCzech/repos). Then you have to apply all your bash magic power to
getting right names from that.

```shell
curl -s https://api.github.com/users/OzzyCzech/repos | json_pp | grep full_name | cut -d\" -f4
```

Or there are a number of tools specifically designed for the purpose of manipulating JSON from the command line.
One of the best seems to me [jq](https://stedolan.github.io/jq/)

```shell
for repo in $(curl -s https://api.github.com/users/OzzyCzech/repos | jq -r ".[].ssh_url")
do  
  git backup $repo /Volumes/Backup/git
done;
```

#git #bash 