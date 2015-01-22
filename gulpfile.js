var gulp = require('gulp');
var mocha = require('gulp-mocha');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
// var del = require('del');

var paths = {
  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  images: 'client/img/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  // gulp.watch(paths.scripts, ['scripts']);
  // gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', function() {
  console.log(" working");
});

gulp.task('test', function() {

  console.log(" running tests");
  return gulp.src('test/index.js', {read:false})
      .pipe(mocha({ reporter: 'nyan'}));
});