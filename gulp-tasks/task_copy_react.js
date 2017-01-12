var gulp         = require('gulp');
var newer        = require('gulp-newer');


// Copy react.js and react-dom.js to src/scripts/vendor
// only if the copy in node_modules is "newer"
gulp.task('copy-react', function() {
  return gulp.src('node_modules/react/dist/react.js')
    .pipe(newer('src/scripts/vendor/react.js'))
    .pipe(gulp.dest('src/scripts/vendor'));
});

gulp.task('copy-react-dom', function() {
  return gulp.src('node_modules/react-dom/dist/react-dom.js')
    .pipe(newer('src/scripts/vendor/react-dom.js'))
    .pipe(gulp.dest('src/scripts/vendor'));
});


// Copy assets/js/vendor/* to assets/js
gulp.task('copy-js-vendor', function() {
  return gulp
    .src([
      'src/scripts/vendor/react.js',
      'src/scripts/vendor/react-dom.js'
    ])
    .pipe(gulp.dest('build/js/vendor'));
});
/**/
