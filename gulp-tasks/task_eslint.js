var gulp         = require('gulp');
var eslint       = require('gulp-eslint');

var jsFiles = {
  vendor: [

  ],
  source: [
    'src/scripts/Utility.js',
    'src/scripts/components/hello.jsx'
  ]
};

// Lint JS/JSX files
gulp.task('eslint', function() {
  return gulp.src(jsFiles.source)
    .pipe(eslint({
      baseConfig: {
        "ecmaFeatures": {
           "jsx": true
         }
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
