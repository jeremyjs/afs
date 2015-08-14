var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

function logError (err) {
  // Inspect the err object
  //console.log(err);

  // Easy err reporting
  console.log(err.toString());

  // Prevent the 'watch' task from stopping
  this.emit('end');
}

gulp.task('js:build', function() {
  return gulp.src(['dev/**/*.js', 'controllers/services/**/*.js', 'models/**/*.js', 'controllers/*.js'])
  .pipe(plumber({ errorHandler: logError }))
  .pipe(babel())
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('static/js'))
  .on('error', logError)
});

gulp.task('less:build', function () {
  return gulp.src('dev/less/**/*.less')
  .pipe(plumber({ errorHandler: logError }))
  .pipe(less({
    paths: [ path.join(__dirname, 'dev', 'less', 'includes') ]
  }))
  .pipe(gulp.dest('static/css'))
  .on('error', logError)
});

gulp.task('default', ['less:build', 'js:build']);

gulp.watch(['dev/**/*.js', 'models/**/*.js', 'controllers/**/*.js', 'dev/less/**/*.less'], ['js:build', 'less:build']);
