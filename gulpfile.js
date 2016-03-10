var concat = require('gulp-concat');
var gulp = require('gulp');
var gzip = require("gulp-gzip");
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

gulp.task("scripts",()=>{
  return gulp.src('./public/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .on('error', function(err){
      console.log(err);
    })
    .pipe(gulp.dest('./public/optimised'));
});
gulp.task("scripts-bootstrap",()=>{
  return gulp.src('./public/scripts/bootstrap*.js')
    .pipe(concat('bootstrap-script.js'))
    .pipe(gulp.dest('./public/optimised'));
});
gulp.task("scripts-jquery",()=>{
  return gulp.src('./public/scripts/jquery*.js')
    .pipe(concat('jquery-script.js'))
    .pipe(gulp.dest('./public/optimised'));
});

gulp.task("images-min",()=>{
  return gulp.src('./public/images/**/*')
    .pipe(imagemin({
    		progressive: true
    }))
    .pipe(gulp.dest('./public/optimised-images'));
});

gulp.task("scripts-gzip",()=>{
  return gulp.src('./public/scripts/*.js')
    .pipe(gzip({append:false}))
    .pipe(gulp.dest('./public/optimised'));
});
