// Requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var csslint = require('gulp-csslint');
var cleanCSS = require('gulp-clean-css');
var ts = require('gulp-typescript');

// Paths
var input = './css/**/space-cadet.scss';
var prodOutput = './dist/css';

// Prod options
var prodOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

// Dev options
var devOptions = {
  errLogToConsole: true
};

//Cleaning dist folder
gulp.task('clean', function () {
	return gulp.src('./dist', {read: false})
		.pipe(clean());
});

// Prod css compile
gulp.task('prod-sass', function () {
  return gulp
    .src(input)
    .pipe(sass(prodOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(prodOutput));
});

// Dev css compile
gulp.task('dev-sass', function () {
  return gulp
    .src(input)
    .pipe(sass(devOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(prodOutput));
});

// Dev JS compile
gulp.task('dev-js', function() {
  return gulp.src('./js/**/*.js')
          .pipe(concat('space-cadet.js'))
          .pipe(gulp.dest('./dist/js'));
});

//Clean CSS
gulp.task('minify-css', function() {
  return gulp.src('./dist/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

//CSS lint
gulp.task('css-lint', function() {
  gulp.src('./dist/**/*.css')
    .pipe(csslint({
      'vendor-prefix' : false,
      'compatible-vendor-prefix' : false,
      'gradients' : false,
      'unqualified-attributes': false,
      'adjoining-classes': false,
      'box-model': false
    }))
    .pipe(csslint.reporter());
});
