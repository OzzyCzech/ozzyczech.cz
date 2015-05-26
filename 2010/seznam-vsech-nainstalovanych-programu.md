<!--
title : Seznam všech nainstalovaných programů
author : Roman Ožana <ozana@omdesign.cz>
date : 27.12.2010 08:30:51
tags : how-to, Windows
-->

# Seznam všech nainstalovaných programů

Seznam všech **nainstalovaných programů** je velmi užitečná pomůcka při reinstalaci systému. Jeho vytvoření je velmi jednoduché. Nejprve spustíte příkazový řádek (Win+R &#8211; cmd). Do něj napíšete příkaz:� ****

<pre>WMIC /output:C:\install.txt product get name,version</pre>

**Seznam aktuálně nainstalovaných programů** se uloží do souboru _C:\install.txt_ &#8211; v tomto souboru naleznete na řádku jméno programu a jeho verzi (name,version). Další parametry, které je možné získat úpravou příkazu jsou Description, IdentifyingNumber, InstallDate, InstallLocation, InstallState, PackageCache, SKUNumber nebo Vendor.