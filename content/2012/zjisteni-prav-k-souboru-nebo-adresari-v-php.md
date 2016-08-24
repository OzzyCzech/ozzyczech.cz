---
title: Zjištění práv k souboru nebo adresáři v PHP
date: 5.9.2012 12:43:05
author: Roman Ožana <ozana@omdesign.cz>
tags: PHP, tip
---


# Zjištění práv k souboru nebo adresáři v PHP

    function getPermisions($file) {
     return (is_dir($file) || is_file($file)) ? substr(decoct(fileperms($path)), -4) : '0000';
    }


 Nebo pro kontrolu, zda jsou práva dostatečná: 
    function hasPermisions($path, $permission = 777) {
     $current = substr(decoct(fileperms($path)), $permission > 1000 ? -4 : -3);
     return ($current > $permission);
    }


 #php #tip