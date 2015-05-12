<!--
title : Odstranění části admin menu ve WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 21.12.2009 09:37:50
tags : PHP, programovani, wordpress
-->

# Odstranění části admin menu ve WordPress

Wordpress není systém, který by nabízel přebujelé množství funkcí. Administrace je jednoduchá a přehledná. Přesto se občas může hodit, nějakou tu funkci **natvrdo schovat** před **nenechavým klikáním** zákazníka.

Celé administrátorské menu je uložené v souboru wp-admin/menu.php &#8211; do toho **samozřejmě sahat nebudeme**. Tento soubor nám postačí k tomu, abychom zjistili jak se menu tvoří. Menu je uložené ve dvou polích: _$menu_ a _$submenu_.� Obě tyto pole můžeme **svobodně upravit**, protože se jedná o **globální proměnné**. Svobodně upravit znamená například **část vymazat**. Úpravu těchto polí musíme samozřejmě stihnout před tím, než se pole použijí při vykreslování menu.

Do souboru function.php, který najdete ve _wp-content/template/cokoliv_, stačí přidat� **nový hook a funkci**:

<pre>function edit_remove_menu() {
  global $menu, $submenu;
  unset($menu[25]); // odstraní z menu komentáře
  unset($menu[15]); // odstraní z menu odkazy

  // dale je mozne upravit také submenu
  unset($submenu['edit.php'][15]); // odstraní Příspěvky / Štítky
}

add_action('admin_menu', 'edit_remove_menu');
</pre>

Na závěr malé upozornění, jednotlivé skryté funkcionality nadále fungují, pouze nejsou vidět v menu. Takže pokud znáte tu správnou adresu, můžete se k nim normálně dostat.