<!--
title : Jak spočítat počet řádků kódu?
author : Roman Ožana <ozana@omdesign.cz>
date : 7.1.2012 06:51:30
tags : bash, PHP, Počet řádků
-->

# Jak spočítat počet řádků kódu?

V mém příkladu počítám počet řádků PHP kódu:

<pre>grep -v '^ *$' `find . -iname "*.php"` | wc -l</pre>

Pro zajímavost takový Wordpress má více jak 250 000 řádků PHP.