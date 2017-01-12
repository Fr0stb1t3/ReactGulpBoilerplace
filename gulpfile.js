var gulp = require('gulp');
var gulpRequireTasks = require('gulp-require-tasks');
var runSequence = require('run-sequence');

var browserSync  = require('browser-sync');
var filter       = require('gulp-filter');
var newer        = require('gulp-newer');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;


//var connect = require('gulp-connect');
var colors = require('colors');
//var watch = require('gulp-watch');

// Invoke the module with options.
gulpRequireTasks({
  gulp: gulp,
  // Specify path to your tasks directory.
  path: process.cwd() + '/gulp-tasks' // This is default!
});



// Watch JS/JSX and Sass files
gulp.task('watch', function() {
  gulp.watch('assets/js/src/**/*.{js,jsx}', ['concat']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});

// BrowserSync
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './build'
    },
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('build', ['sass', 'copy-js-vendor', 'concat']);
gulp.task('default', ['build', 'browsersync', 'watch']);
