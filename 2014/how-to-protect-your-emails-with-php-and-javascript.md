<!--
title : How to protect your emails with PHP and Javascript
author : Roman OÅ¾ana <ozana@omdesign.cz>
date : 22.4.2014 07:38:08
tags : email, js, PHP, protection
-->

# How to protect your emails with PHP and Javascript

Working with or without javascript it&#8217;s combine two technique for email protection [ROT13][1] and CSS

    function mail($email, $text = null) {
     return '<script type="text/javascript">document.write("' .
     addslashes(
      str_rot13(
       '<a href="mailto:' . $email . '" rel="nofollow">' . ($text ? : $email) . '</a>'
      )
     ) . '".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));</script>' .
     '<noscript><span style="unicode-bidi: bidi-override; direction: rtl;">' . strrev($email) . '</span></noscript>';
    }
    

Sources:

  * [Nine ways to obfuscate e-mail addresses compared][2]
  * and [Best Method for Email Obfuscation?][3]

 [1]: http://en.wikipedia.org/wiki/ROT13
 [2]: http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/
 [3]: http://perishablepress.com/best-method-for-email-obfuscation/
