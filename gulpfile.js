var gulp = require('gulp'),
    bower = require('gulp-bower'),
    connect = require('gulp-connect'),
    prettify = require('gulp-js-prettify');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('bower_components/'))
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('prettify', function() {
  gulp.src('./js/format.js')
    .pipe(prettify({collapseWhitespace: true}))
    .pipe(gulp.dest('./js'))
});

gulp.task('default', ['webserver']);
