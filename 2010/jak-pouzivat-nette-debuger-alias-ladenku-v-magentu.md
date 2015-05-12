<!--
title : Jak používat Nette Debug alias Laděnku v Magentu
author : Roman Ožana <ozana@omdesign.cz>
date : 6.5.2010 14:06:32
tags : Magento, Nette, PHP
-->

# Jak používat Nette Debug alias Laděnku v Magentu

[Magento][1] je pomalý neohrabaný moloch! Nepřeberné množství funkcí zaplatil tento� **opensource e-shop** svou rychlostí/pomalostí. Přesto dnes patří k nejrozšířenějším komerčním (opensource) platformám na světě.

Pokud se někdy dostanete k jeho implementaci. Pak budete zřejmě� � plakat, až na Vás jednou Magento plivne své **strohé nic neříkající chybové hlášení**. Možná, že stejně jako já, zatoužíte po� [Laděnce][2] ([Nette Debug][3]). A předem se přiznávám, že jsem si na ní vypěstoval jistou **těžkou formu závislosti**.

První co musíte udělat je stáhnout a rozbalit� [Nette Framework][4], jehož je Debug/Laděnka součástí. � Ideální je někam do � instalace Magenta nakopírovat minimalizovanou verzi (_Nette.minified/loader.php_). Pot0 stačí někde na začátek magentovského _index.php_ přidat staré známé.

<pre>require_once 'Nette/loader.php';
Debug::$strictMode = TRUE;
Debug::enable(Debug::DETECT, dirname(__FILE__).'/var/log/errors.txt');
</pre>

Ve druhém kroku je pak nutné upravit (vyrušit) vnitřní magentovský� **odchytávač chyb**. Najdete jej v souboru _\app\code\core\Mage\Core\Model\App.php_. Kolem řádku 552 se volá funkce **_setErrorHandler_<span style="font-weight: normal;">. Řádek s</span>**tačí zakomentovat. Od této chvíle dostanete krásné červené hlášení o chybě, na které jste se tak těšili.

 [1]: http://www.magentocommerce.com/ "Magento"
 [2]: http://latrine.dgx.cz/ladenka-jak-se-vam-libi "Laděnka jak se Vám líbí"
 [3]: http://doc.nette.org/cs/nette-debug "Nette Debug"
 [4]: http://nettephp.com/ "Nette Framework"