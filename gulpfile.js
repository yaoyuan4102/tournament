//var elixir = require('laravel-elixir');
//
///*
// |--------------------------------------------------------------------------
// | Elixir Asset Management
// |--------------------------------------------------------------------------
// |
// | Elixir provides a clean, fluent API for defining some basic Gulp tasks
// | for your Laravel application. By default, we are compiling the Sass
// | file for our application, as well as publishing vendor resources.
// |
// */
//
//elixir(function(mix) {
//    mix.sass('app.scss');
//});
/**
 * Created by chenzhen on 15/12/18.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

gulp.task('js', function(){
 gulp.src(['src/js/*.js', 'src/js/**/*.js', '!src/js/vendor/*.js'])
     .pipe(concat('app.js'))
     .pipe(ngAnnotate())
  //.pipe(uglify())
     .pipe(gulp.dest('public/assets/js'))
});

//
gulp.task('vendor-js', function(){
 gulp.src([
  'src/js/vendor/angular.min.js',
  'src/js/vendor/angular-animate.min.js',
  'src/js/vendor/angular-ui-router.min.js',
  'src/js/vendor/jquery.min.js',
  'src/js/vendor/bootstrap.min.js',
  'src/js/vendor/angular-strap.js',
  'src/js/vendor/angular-strap.tpl.js',
 ])
     .pipe(concat('vendor.js'))
     .pipe(uglify())
     .pipe(gulp.dest('public/assets/js'))
});

gulp.task('sass', function(){
 return gulp.src('src/sass/app.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(minifyCss())
     .pipe(gulp.dest('public/assets/css'));
})

gulp.task('vendor-sass', function(){
 return gulp.src('src/sass/vendor.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(minifyCss())
     .pipe(gulp.dest('public/assets/css'));
})

gulp.task('watch', function(){
 gulp.watch('src/js/*.js', ['js']);
 gulp.watch('src/js/**/*.js', ['js']);
 gulp.watch('src/sass/*.scss', ['sass']);
 gulp.watch('src/sass/**/*.scss', ['sass']);
})

// define the default task
gulp.task('default', ['watch', 'vendor-js', 'js', 'sass', 'vendor-sass']);