"use strict";

//REQUERIMOS LOS MODULOS QUE NECESITAMOS DE NODE_MODULES
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync");

gulp.task("sass", function () {
  gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./css/*.scss", ["sass"]);
});

gulp.task("browser-sync", function () {
  var files = [
    "./*.html",
    "./css/*.css",
    "./images/*.{png, jpg, gif}",
    "./js/*.js",
  ];
  browserSync.init(files, {
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("default", ["browser-sync"], function () {
  gulp.start("sass:watch");
});
