var gulp         = require('gulp');
var webpack     = require('webpack-stream');


gulp.task("webpack", function(callback) {
  return gulp.src('src/index.jsx')
  .pipe(webpack(require('../webpack.config.js')))
  .pipe(gulp.dest('build/js'));
})
