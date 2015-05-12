<!--
title : Vizualizace GIT pomocí Gource pro Mac
author : Roman Ožana <ozana@omdesign.cz>
date : 12.9.2012 05:30:34
tags : git, gource, mac, macports, video
-->

# Vizualizace GIT pomocí Gource pro Mac

Pro instalaci [Gource][1]� použíjeme:

<pre>sudo port install gource</pre>

Nebo pomocí [Homebrew][2]� to jde podobně snadno:

<pre>brew install gource</pre>

Po dokončení instalace se přepněte do svého git repozitáře. Vizualizaci spustite pomocí příkazu `gource`.

### Pořízení záznamu okna

K pořízení záznamu můžete použít [QuickTime][3], nebo� [ffmpeg][4]. Ffmpeg není součástí OS a budete jej tedy muset doinstalovat:

<pre>sudo port install ffmpeg +gpl +lame +x264 +xvid</pre>

Pak zkuste spustit následující příkaz:

<pre>gource ./ -s 0.5 -b 000000 --user-scale 2.0 -1280x720 -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -crf 1 -threads 0 -bf 0 gource.mp4</pre>

### Avatary místo nezlobsů<p zobrazuje commitera jako hrdinu oblíbeného 

**Člověče nezlob se** a to není dvakrát přehledné. Lepší je využít [Gravatar][5]. Gravatary je potřeba nejprve stáhnout, pomocí [perl skriptu][6]. Pak už stačí jen přidat do předchozího příkazu parametr `--user-image-dir`</p> 

<pre>gource ./ -s 0.5 -b 000000 --user-image-dir ./.git/avatar --user-scale 2.0 -1280x720 -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -crf 1 -threads 0 -bf 0 gource.mp4</pre>

A výsledek? Vypadá například takto:

http://www.youtube.com/watch?v=kuuYrEbhz58

A nebo ještě o něco složitěji:

<pre>gource ./ -s 0.5 -b 000000 --user-image-dir ./.git/avatar --user-scale 1.5 --hide dirnames,mouse  --file-idle-time 0 --multi-sampling --bloom-multiplier 0.9 --bloom-intensity 0.4 -1280x720 --seconds-per-day 1 --date-format "%d. %m. %Y" --title "Testomato" -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -crf 1 -threads 0 -bf 0 testomato.mp4</pre><p</p>

 [1]: http://code.google.com/p/gource/
 [2]: http://mxcl.github.com/homebrew/
 [3]: http://www.macobserver.com/tmo/article/os_x_lion_screen_recording_in_quicktime_x/
 [4]: http://ffmpeg.org/
 [5]: http://gravatar.com/
 [6]: http://code.google.com/p/gource/wiki/GravatarExample