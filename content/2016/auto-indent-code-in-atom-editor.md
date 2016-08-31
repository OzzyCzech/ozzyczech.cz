---
title: How to Auto indent code in Atom editor
date: 2016-08-08
---
# How to Auto indent code in Atom editor

Auto indent it's hidden function is hidden in menu `Ediror > Lines > Auto Indent` but shortcut missing :-(

Press `cmd + shift + p` then type `keymap` and hit enter **Open Your Keymap**.

![Open Your Keymap](./atom-keymap.png)

and add follow code there

```
'atom-text-editor':
  'cmd-alt-l': 'editor:auto-indent'
```

Now your Atom edit can Auto Indent with `cmd + alt + l`

tags: atom, editor, keymap, tips
