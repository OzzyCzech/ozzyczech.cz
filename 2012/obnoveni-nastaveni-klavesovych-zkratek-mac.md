<!--
title : Obnovení nastavení klávesových zkratek Mac
author : Roman Ožana <ozana@omdesign.cz>
date : 2.8.2012 06:00:01
tags : mac
-->

# Obnovení nastavení klávesových zkratek Mac

Pokud si **zmrvíte nastavení klávesových** zkratek na Mac OS X, jako se to povedlo dneska mně. Přestane Vám například fungovat `F4` pro LaunchPad &#8211; stačí odstranit patřičný konfigurační soubor:

<pre>rm ~/Library/Preferences/com.apple.symbolichotkeys.plist
</pre>

Po odhlášení a opětovném přihlášení uživatele se tento soubor vytvoří znova s původním defaultním nastavením.<p</p>