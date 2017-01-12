var gulp = require('gulp');

var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gulpIgnore = require('gulp-ignore');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');


/* NEW */
var autoprefixer = require('gulp-autoprefixer');
var babel        = require('gulp-babel');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var filter       = require('gulp-filter');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
// Compile Sass to CSS

var plumberOptions = {
  errorHandler: onError,
};

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};


gulp.task('sass', function() {
  var autoprefixerOptions = {
    browsers: ['last 2 versions'],
  };

  var filterOptions = '**/*.css';

  var reloadOptions = {
    stream: true,
  };

  var sassOptions = {
    includePaths: [

    ]
  };

  return gulp.src('src/scss/main.scss')
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/css'))
    .pipe(filter(filterOptions))
    .pipe(reload(reloadOptions));
});


/*
  SASS COMPILE COMMAND Old

gulp.task('sass', function() {
  return sass('./src/scss/main.scss', {
    sourcemap: true
  })
  .pipe(sourcemaps.write('./', {
    includeContent: false,
    sourceRoot: '/src/scss'
  }))
  .pipe(gulp.dest('./build/css'))
  .pipe(gulpIgnore.exclude(function(file) {
    if (file.path.indexOf('.map') !== -1) {
      return true;
    } else {
      return false;
    }
  }))
  .pipe(minifyCss())
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(gulp.dest('./dist/css'))
  .on('error', function (err) {
    console.error(err.message);
  });

});
*/
