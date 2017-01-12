var gulp         = require('gulp');
var eslint       = require('gulp-eslint');
var jsFiles   = require("../jsfiles");


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
