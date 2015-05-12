<!--
title : Klávesové zkratky a Mac OS
author : Roman Ožana <ozana@omdesign.cz>
date : 27.10.2011 21:05:19
tags : Klávesové zkratky, mac
-->

# Klávesové zkratky a Mac OS

První věc, která mi v [Mac OS][1] zachyběla byly notoricky známé klávesové zkratky. Člověku to **Ctrl+C** a **Ctrl+V** prostě z hlavy/prstů jen tak nevymaže. Naštěstí to jde celkem dobře vyřešit:

Otevřete si terminál a zadejte:

<pre>cd ~/Library/
mkdir KeyBindings
cd KeyBindings
nano DefaultKeyBinding.dict</pre>

Do souboru vložte následující:

<pre>{
 "\UF729"    = "moveToBeginningOfLine:"; /* home - Beginning of line */
 "\UF72B"    = "moveToEndOfLine:"; /* end - End of line */

 "$\UF729"   = "moveToBeginningOfLineAndModifySelection:"; /* Shft-home - Select to beginning of line */
 "$\UF72B"   = "moveToEndOfLineAndModifySelection:"; /* Shft-end - Select to end of line */

 "^\UF729"   = "moveToBeginningOfDocument:"; /* C-home - Beginning of document */
 "^\UF72B"   = "moveToEndOfDocument:"; /* C-end - End of document */

 "^a"        = "selectAll:"; /* C-a - Select all */

 "^x"        = "cut:"; /* C-x - Cut */
 "^c"        = "copy:"; /* C-c - Copy */
 "^v"        = "paste:"; /* C-v - Paste */
 "^z"        = "undo:"; /* C-z - Undo */
 "^y"        = "redo:"; /* C-y - Redo */

 "^s"        = "save:"; /* C-s - Save */
 "^S"        = "saveAs:"; /* C-Shft-s - Save as */
 "^p"        = "print:"; /* C-p - Print */
}</pre>

Ostatní můžete najít zde: <http://goo.gl/5aaZE>

 [1]: https://plus.google.com/106896084815653960942/posts/2qAQg3D9sY5