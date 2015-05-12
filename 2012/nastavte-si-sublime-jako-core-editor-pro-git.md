<!--
title : Nastavte si Sublime jako core editor pro GIT
author : Roman Ožana <ozana@omdesign.cz>
date : 26.12.2012 19:41:03
tags : git, mac, sublime, terminal
-->

# Nastavte si Sublime jako core editor pro GIT

Nejprve je potřeba mít vytvořený [subl symlink][1] poté stačí v terminálu spustit příkaz:

<pre>git config --global core.editor "subl -n -w"</pre><p</p>

 [1]: http://www.nabito.net/sublime-text-2-spousteni-pres-terminal/