<!--
title : Convert JSON data to valid PHP code
author : Roman OÅ¾ana <ozana@omdesign.cz>
date : 19.1.2014 17:30:01
-->

# Convert JSON data to valid PHP code

Do you need **convert JSON data to valid PHP** code without pain? I&#8217;ve got a short script for that!Â My simple solution usedÂ [var_export()][1]Â function. This function generates almost valid, well formatted PHP code from usual JSON data. Invalidity of code can be fix with one regular expression, which replace `stdClass::__set_state/`Â with `(object)`.

<div id="gt-src-c">
  <div id="gt-src-p">
    <div id="gt-src-wrap">
      <div id="gt-src-tools">
        <div id="gt-src-tools-l">
          Take a closer look at example data. I have here <a href="https://gist.github.com/Fluidbyte/2973986">currency.json</a>Â &#8211;Â PHP codeÂ should look something like this:
        </div>
      </div>
    </div>
  </div>
</div>

    <?php
     return array (
      'USD' => 
      (object)(array(
         'symbol' => '$',
         'name' => 'US Dollar',
         'symbol_native' => '$',
         'decimal_digits' => 2,
         'rounding' => 0,
         'code' => 'USD',
         'name' => 'US dollars',
      )),
      'CAD' => 
      //...
    );

It&#8217;s can be done in only four lines of PHP code:

    $data = json_decode(file_get_contents(__DIR__ . '/currency.json'));
    $code = var_export((array)$data, true);
    $code = "<?php\n return " . preg_replace('/stdClass::__set_state/', '(object)', $code) . ';';
    file_put_contents(__DIR__ . '/currencies.locale.php', $code);

If you need call some function (likeÂ [gettext][2]) above the variable, just add more regular expression:

    $data = json_decode(file_get_contents(__DIR__ . '/currency.json'));
    $code = var_export((array)$data, true);
    
    // add gettext function call
    $code = preg_replace("/'name' => '(.+)'/", "'name' => __('$1')", $code);
    $code = preg_replace("/'name_plural' => '(.+)'/", "'name' => __('$1')", $code);
    
    // save PHP code
    $code = "<?php\n return " . preg_replace('/stdClass::__set_state/', '(object)', $code) . ';';
    file_put_contents(__DIR__ . '/currencies.locale.php', $code);
    

&nbsp;

 [1]: http://www.php.net/manual/en/function.var-export.php
 [2]: http://www.php.net/manual/en/book.gettext.php