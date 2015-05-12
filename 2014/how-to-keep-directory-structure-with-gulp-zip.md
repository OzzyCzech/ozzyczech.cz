<!--
title : How to keep directory structure with gulp-zip
author : Roman OÅ¾ana <ozana@omdesign.cz>
date : 27.5.2014 08:42:57
tags : gulp, zip
-->

# How to keep directory structure with gulp-zip

Here is a simple way, how to keep directory structure with [gulp-zip][1]. You just need addÂ `{base: "."}` to src:

    var gulp = require("gulp");
    var zip = require("gulp-zip");
    path = require('path');
    
    gulp.task("zip", function () {
     return gulp.src([
       'css/*',
       'img/*',
       'js/*',
       'manifest.json',
       'popup.html',
      ], {base: "."})
      .pipe(zip('archive.zip'))
      .pipe(gulp.dest('dist'));
    });
    
    gulp.task("default", ["zip"]);
    <p-zip</p>

 [1]: https://github.com/sindresorhus/gulp-zip