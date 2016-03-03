var concat = require('gulp-concat');
var gulp = require('gulp');
gulp.task("scripts",()=>{
  return gulp.src('./public/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./public/optimised'));
});
