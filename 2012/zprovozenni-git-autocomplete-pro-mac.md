<!--
title : Zprovozenní GIT autocomplete pro Mac
author : Roman Ožana <ozana@omdesign.cz>
date : 4.3.2012 16:35:59
tags : git, lion, mac, terminal
-->

# Zprovozenní GIT autocomplete pro Mac

Pro instalaci využijeme� <a title="MacPorts" href="http://www.macports.org/" target="_blank">MacPorts</a>� &#8211; nejprve v terminálu napište následující příkazy:

<pre>sudo port selfupdate
sudo port install git-core +bash_completion +doc +svn</pre>

Pro autocomplete a chytrý prompt budete potřebovat dva skripty `git-prompt.sh`� a� `git-completion.bash`. Snadno je naleznete pomocí příkazu� `port contents git-core | grep git-prompt.sh`� .

Po dokončení instalace vložte do svého� `~/.profile`� nebo� `~/.bash_profile`� následující řádky:

<pre># Bash shell command completion
if [ -f /opt/local/share/git-core/contrib/completion/git-completion.bash ]; then
  . /opt/local/share/git-core/contrib/completion/git-completion.bash
fi

if [ -f /opt/local/share/git-core/contrib/completion/git-prompt.sh ]; then
  . /opt/local/share/git-core/contrib/completion/git-prompt.sh
fi

GIT_PS1_SHOWDIRTYSTATE=1
GIT_PS1_SHOWUNTRACKEDFILES=1
GIT_PS1_SHOWUPSTREAM="git verbose legacy"
export PSORIG="$PS1" # pokud chcete zachovat puvodni PS1
PS1=$PSORIG'$(__git_ps1 "\[\033[01;31m\]%s \[\033[00m\]")'</pre><p</p>