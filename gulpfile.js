var gulp = require('gulp'),
mocha = require('gulp-mocha'),
babel = require('babel-register');
var exec = require('child_process').exec;

/**Tarea para realizar test*/
gulp.task('test', function() {
  return gulp.src(['test/*.js'])
    .pipe(mocha({
      compilers:babel
  }));
});

/**Tarea para instalar dependencias del proyecto*/
gulp.task('install', async function (cb) {
  // exec('npm install', function (err, stdout, stderr) {
  //   console.log(stdout);
  //   console.log(stderr);
  //   cb(err);
  // });
})

gulp.task('build', async function (cb) {
  // exec('node microservicio/index.js', function (err, stdout, stderr) {
  //   console.log(stdout);
  //   console.log(stderr);
  //   cb(err);
  // });
})


/**Tarea por defecto, muestra las tareas posibles disponibles*/
gulp.task('default', async function(done) {
  console.log('Available Tasks: [test, install]');
  done();
});