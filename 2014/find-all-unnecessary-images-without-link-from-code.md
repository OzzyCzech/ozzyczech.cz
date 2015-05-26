<!--
title : Find all unnecessary images without link from code
author : Roman Ožana <ozana@omdesign.cz>
date : 17.1.2014 11:49:48
-->

# Find all unnecessary images without link from code

How to find all unnecessary images in your website project?

    find public/images -type f|while read line ; do printf "$(basename $line) > " &#038;&#038; ack --nofilter -l -c "$(basename $line)" | wc -l; done
    

Output will be:

<pre>sprite.gif > 0
ajax-loader-bg-f9.gif > 2
ajax-loader-bg-trans.gif > 3
ajax-loader-static-bg-trans.gif > 2
bg_about.png > 2
...
</pre>

If you want output filenames not just marches count remove `| wc -l`