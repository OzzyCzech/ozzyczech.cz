<!--
title : Ultimátní detekce OS v Apache ANT
author : Roman Ožana <ozana@omdesign.cz>
date : 26.4.2012 17:00:29
tags : Apache Ant, Deployment, Detekce OS pomoci ANT
-->

# Ultimátní detekce OS v Apache ANT

ANT dokáže rozpoznat relativně snadno nad **jakým OS byl právě spuštěn**. Tahle vlastnost se Vám bude hodit zejména tehdy, pokud budete nuceni spouštět příkazy **závisle na platformě**.

Při detekci OS jsem narazil na drobný problém se správným rozpoznáním Mac OS X a Linux (oba jsou na UNIX jádru) &#8211; to se vyřešilo složitější podmínkou. V závěru ANT skriptu najdete také příklad použití.

<pre>&lt;project name="osDetect"&gt;
 &lt;!-- Mac OS X based --&gt;
 &lt;condition property="isMac"&gt;
  &lt;os family="mac"/&gt;
 &lt;/condition&gt;

 &lt;!-- Mac OS but not OS X --&gt;
 &lt;condition property="isMacButNotMacOsX"&gt;
  &lt;and&gt;
   &lt;os family="mac"/&gt;
   &lt;not&gt;
    &lt;os family="unix"/&gt;
   &lt;/not&gt;
  &lt;/and&gt;
 &lt;/condition&gt;

 &lt;!-- UNIX based system (unix, max os x) --&gt;
 &lt;condition property="isUnix"&gt;
  &lt;os family="unix"/&gt;
 &lt;/condition&gt;

 &lt;!-- Linux BASED system --&gt;
 &lt;condition property="isLinux"&gt;
  &lt;and&gt;
   &lt;os family="unix"/&gt;
   &lt;not&gt;
    &lt;os family="mac"/&gt;
   &lt;/not&gt;
  &lt;/and&gt;
 &lt;/condition&gt;

 &lt;target name="-linux.run" if="isLinux"&gt;
  &lt;echo&gt; je to Linux &lt;/echo&gt;
 &lt;/target&gt;

 &lt;target name="-mac.run" if="isMac"&gt;
  &lt;echo&gt; je to Mac &lt;/echo&gt;
 &lt;/target&gt;

 &lt;target name="run" depends="-linux, -mac.run" /&gt;
&lt;/project&gt;</pre>

Tip: jméno právě používaného OS můžete získat z proměnné _os.name_

<pre>&lt;target name="os"&gt;
 &lt;echo&gt;${os.name}&lt;/echo&gt;
&lt;/target&gt;</pre>