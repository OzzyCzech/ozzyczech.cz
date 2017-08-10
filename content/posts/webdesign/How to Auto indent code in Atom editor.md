---
title: How to Auto indent code in Atom editor
date: 2016-08-08
tags: [atom]
---
# How to Auto indent code in Atom editor

Auto indent it's hidden function is hidden in menu `Ediror > Lines > Auto Indent` but shortcut missing :-(

Press `cmd + shift + p` then type `keymap` and hit enter **Open Your Keymap**.

![Open Your Keymap](/posts/atom-keymap.png)

and add follow code there

```
'atom-text-editor':
  'cmd-alt-l': 'editor:auto-indent'
```

Now your Atom edit can Auto Indent with `cmd + alt + l`
