var path = require('path');  
var gulp = require('gulp');  
var gutil = require('gulp-util');  
var concat = require('gulp-concat');  
var uglify = require('gulp-uglify');  
var less = require('gulp-less');  
var babel = require('gulp-babel');  
var watch = require('gulp-watch');

gulp.task('js:build', function() {
  return gulp.src(['dev/**/*.js', 'controllers/**/*.js', 'models/**/*.js'])
  .pipe(babel())
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('static/js'))
  .on('error', gutil.log);
});

gulp.task('less:build', function () {  
  return gulp.src('dev/less/**/*.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'dev', 'less', 'includes') ]
  }))
  .pipe(gulp.dest('static/css'))
  .on('error', gutil.log);
});

gulp.task('default', ['less:build', 'js:build']);
