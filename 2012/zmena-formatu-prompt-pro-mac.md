<!--
title : Změna formátu prompt pro Mac
author : Roman Ožana <ozana@omdesign.cz>
date : 17.9.2012 04:45:10
tags : mac, profile, terminal, tip
-->

# Změna formátu prompt pro Mac

Následující kód umístěte do svého `~/.bash_profile`� ideálně hned na začátku:

<pre># \d – Current date 
# \t – Current time
# \h – Host name
# \# – Command number
# \u – User name
# \W – Current working directory (ie: Desktop/)
# \w – Current working directory, full path (ie: /Users/Admin/Desktop)
# export PS1="\u@\h\w: "
export PS1="\w: "</pre>

Po restartování terminálu (⌘+Q) se vám zobrazí prompt v podobě: `~/Documents:`<p</p>