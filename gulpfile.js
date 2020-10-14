var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  babel = require('babel-register');
gulp.task('test', function() {
  return gulp.src(['test/*.js'])
    .pipe(mocha({
      compilers:babel
  }));
});