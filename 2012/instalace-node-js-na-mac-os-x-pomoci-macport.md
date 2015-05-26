<!--
title : Instalace Node.js na Mac OS X pomocí macport
author : Roman Ožana <ozana@omdesign.cz>
date : 15.4.2012 18:54:22
tags : js, mac, macports, node, npm, xcode
-->

# Instalace Node.js na Mac OS X pomocí macport

### Instalace node.js

Máte nainstalovaný [Xcode][1] a [MacPort][2]? Fajn. Můžete pokračovat. Nejprve si zaktualizujte port:

<pre>sudo port selfupdate</pre>

Pak spusťte samotnou instalaci [node.js][3]

<pre>sudo port install nodejs</pre>

Nakonec nastavte svému uživateli přístupová práva zápisu ke složce _/opt/local_.

<pre>sudo chmod -R g+w /opt/local/</pre>

### Instalace Node Package Manageru

[npm][4] je balčkovací manažer pro node.js, který Vám umožní snadno instalovat jednotlivé node balíčky vč. jejich závislostí ([vyhledávač balíčků][5]). Nainstalujete jej pomocí `install.sh` skriptu následovně:

<pre>curl http://npmjs.org/install.sh | sh</pre>

Na závěr ověřte, že node.js i npm fungují správně:

<pre>node -v # vypise v0.6.15
npm -v # vypise 1.1.16</pre><p</p>

 [1]: https://developer.apple.com/xcode/
 [2]: http://www.macports.org/
 [3]: http://nodejs.org/
 [4]: http://npmjs.org/
 [5]: http://search.npmjs.org/