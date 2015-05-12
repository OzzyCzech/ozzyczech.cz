<!--
title : Google Closure Compiler v Apache ANT
author : Roman Ožana <ozana@omdesign.cz>
date : 26.3.2012 05:36:19
tags : ANT, closure, compiler, google
-->

# Google Closure Compiler v Apache ANT

[Apache ANT][1] a [Google Closure Compiler][2] je možné snadno propojit. Stáhněte si [compiler.jar][3] a do svého antího build skriptu přidejte:

<pre>&lt;taskdef name="jscomp" classname="com.google.javascript.jscomp.ant.CompileTask"
classpath="build/Google-Closure-Compiler/compiler.jar"/&gt;</pre>

Touto definicí získáte nový target **jscomp**, který pak stačí zavolat nad vašimi JavaScripty:

<pre>&lt;jscomp compilationLevel="simple" warning="quiet"
debug="false" output="/js/main.min.js"&gt;
&lt;sources dir="/js-src/"&gt;
 &lt;file name="main.js"/&gt;
 &lt;file name="plugins.js"/&gt;
&lt;/sources&gt;
&lt;/jscomp&gt;</pre>

  * [Build with ANT][4]
  * [Stažení Google Closure Compiler][3]<p</p>

 [1]: http://ant.apache.org/
 [2]: https://developers.google.com/closure/compiler/
 [3]: http://code.google.com/p/closure-compiler/downloads/list
 [4]: http://code.google.com/p/closure-compiler/wiki/BuildingWithAnt