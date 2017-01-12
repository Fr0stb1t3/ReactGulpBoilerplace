var gulp = require('gulp');

var mustache = require("gulp-mustache");
var rename = require('gulp-rename');

var gutil = require('gulp-util');
/*
  TEMPLATE BUILD COMMAND
*/

gulp.task('test', function() {
  console.log("gulp test");
});

gulp.task('templates', function() {
  var contentFile = "./content.json";
  try {
    var f = require("."+contentFile);
    gutil.log(gutil.colors.green('BUILD NOTIFICATION:'), gutil.colors.yellow("Content JSON file is used for the mustache variables"));
  } catch (error) {
    gutil.log(gutil.colors.red('BUILD WARNING:'), gutil.colors.yellow("Content JSON file is Missing, variables will remain empty if not defined in the gulp file"));
    contentFile = {};
  }
  gulp.src("./src/templates/**/*.mustache")
      .pipe(mustache(contentFile ,{},//contentFile
        {
          fristbox: "{{> graybox}}"
        }
      ))
      .pipe(rename({
        extname: '.html'
      }))
      .pipe(gulp.dest("./build"));//.pipe(concat('index.html'))
});
