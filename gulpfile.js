
// grab our packages
var gulp       = require('gulp'),
    less       = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    path       = require('path');

// watch on `gulp`
gulp.task('default', ['watch']);

gulp.task('build-css', function() {
  return gulp.src('stylesheets/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.less', ['build-css']);
});
