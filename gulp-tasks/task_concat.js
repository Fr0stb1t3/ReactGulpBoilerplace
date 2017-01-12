var gulp         = require('gulp');
var babel        = require('gulp-babel');
var concat       = require('gulp-concat');
var sourcemaps   = require('gulp-sourcemaps');

var jsFiles = {
  vendor: [
  ],
  source: [
    'src/scripts/Utility.js',
    'src/scripts/components/hello.jsx'
  ]
};

var jsFilesProd = {
  vendor: [
      'src/scripts/vendor/react.js',
      'src/scripts/vendor/react-dom.js'
  ],
  source: [
    'src/scripts/Utility.js',
    'src/scripts/components/hello.jsx'
  ]
};

// Concatenate jsFiles.vendor and jsFiles.source into one JS file.
// Run copy-react and eslint before concatenating
gulp.task('concat', ['copy-react', 'copy-react-dom', 'eslint'], function() {
  return gulp.src(jsFiles.vendor.concat(jsFiles.source))
    .pipe(sourcemaps.init())
    .pipe(babel({
      only: [
        'src/scripts/components',
      ],
      compact: false
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('concat-prod', ['copy-react', 'copy-react-dom', 'eslint'], function() {
  return gulp.src(jsFilesProd.vendor.concat(jsFiles.source))
    .pipe(sourcemaps.init())
    .pipe(babel({
      only: [
        'src/scripts/components',
      ],
      compact: false
    }))
    .pipe(concat('app.prod.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js'));
});
