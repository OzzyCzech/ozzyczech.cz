<!--
title : Nefunkční localhost v Internet Explorer
author : Roman Ožana <ozana@omdesign.cz>
date : 17.4.2009 08:55:32
tags : how-to, webdesign
-->

# Nefunkční localhost v Internet Explorer

Po nějakém bezpečnostním upgrade mi přestal fungovat localhost (Apache/PHP/MySQL &#8211; [Wamp][1]) v Internet Explorer 7. Dlouho jsme nemohl najít řešení. Teď to snad vypadá, že už jej mám! V souboru _hosts_ 

<pre>c:\windows\system32\drivers\etc\</pre>

je potřeba odebrat localhost z blokovaných serverů. Prostě patřičný řádek smažete (v mém případě tam bylo něco jako :: localhost). Pak už stačí jen [vypnout a zapnout][2] IE a vše by mělo opět šlapat. Pokud localhost stále nefunguje, asi Vám nezbude, než používat lokální IP http://127.0.0.1/.

 [1]: http://www.nabito.net/web-server2go-a-wampserver/ "Wamp Server"
 [2]: http://www.theitcrowd.cz/ "Have you tried turning it off and on again?"