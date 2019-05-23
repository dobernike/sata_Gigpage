'use strict';
// gulp
const gulp = require('gulp');
// common
const plumber = require('gulp-plumber');
const rename = require("gulp-rename");
// html
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const htmlmin = require('gulp-htmlmin');
// css
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
// js
const uglify = require('gulp-uglify');
// img
const imagemin = require('gulp-imagemin');
// webp
const webp = require("gulp-webp");
// svg sprites
const svgstore = require("gulp-svgstore");

// server
const server = require("browser-sync").create();
// delete
const del = require('del');


gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin())
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('js', function () {
  return gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// запускается один раз командой
gulp.task('images', function () {
  return gulp.src('source/img/**/*.{gif,png,jpg,jpeg,svg}')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }), // по умолчанию 3, 7 просто дольше, без потери качеста
      imagemin.jpegtran({ progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('source/img'));
});

// запускается один раз командой npx gulp webp
gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/sprite-svg/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**/*.*'
  ], {
      base: 'source'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('serve', function () {
  server.init({
    server: "build/"
  });

  gulp.watch('source/**/*.scss', gulp.series('css'));
  // gulp.watch('source/img/icon-*.svg', gulp.series('sprite', 'html', 'refresh'));
  gulp.watch('source/**/*.html', gulp.series('html', 'refresh'));
  gulp.watch('source/js/*.js', gulp.series('js', 'refresh'));
});

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'css',
  'images',
  'sprite',
  'js',
  'html'
));

gulp.task('start', gulp.series('build', 'serve'));