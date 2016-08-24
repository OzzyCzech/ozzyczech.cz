---
title: How to keep directory structure with gulp-zip
date: 27.5.2014 10:42:57
author: Roman Ožana <ozana@omdesign.cz>
tags: gulp, zip
---


# How to keep directory structure with gulp-zip

Here is a simple way, how to keep directory structure with [gulp-zip](https://github.com/sindresorhus/gulp-zip). You just need add `{base: "."}` to src:


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


 #zip #gulp #gulp-zip