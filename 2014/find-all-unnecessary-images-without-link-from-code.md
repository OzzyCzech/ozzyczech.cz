<!--
title: Find all unnecessary images without link from code
date: 17.1.2014 12:49:48
author: Roman Ožana <ozana@omdesign.cz>
tags: 
-->


# Find all unnecessary images without link from code

How to find all unnecessary images in your website project?


    find public/images -type f|while read line ; do printf "$(basename $line) > " && ack --nofilter -l -c "$(basename $line)" | wc -l; done


 Output will be: 
    sprite.gif > 0
    ajax-loader-bg-f9.gif > 2
    ajax-loader-bg-trans.gif > 3
    ajax-loader-static-bg-trans.gif > 2
    bg_about.png > 2
    ...


 If you want output filenames not just marches count remove     |
    wc -l