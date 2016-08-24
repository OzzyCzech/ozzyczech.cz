---
title: How to protect your emails with PHP and Javascript
date: 22.4.2014 09:38:08
author: Roman Ožana <ozana@omdesign.cz>
tags: email, js, PHP, protection
---


# How to protect your emails with PHP and Javascript

Working with or without javascript it's combine two technique for email protection [ROT13](http://en.wikipedia.org/wiki/ROT13) and CSS


    function mail($email, $text = null) {
     return '<script type="text/javascript">document.write("' .
     addslashes(
      str_rot13(
       '<a href="mailto:' . $email . '" rel="nofollow">' . ($text ? : $email) . '</a>'
      )
     ) . '".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));</script>' .
     '<noscript><span style="unicode-bidi: bidi-override; direction: rtl;">' . strrev($email) . '</span></noscript>';
    }


 Sources: - [ Nine ways to obfuscate e-mail addresses compared](http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/)
- and [Best Method for Email Obfuscation?](http://perishablepress.com/best-method-for-email-obfuscation/)

 #js #php #email #protection