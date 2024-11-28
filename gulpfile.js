'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');
const replace = require('gulp-replace-path');
const path = require('path');

// function defaultTask() {
//     // return gulp.src(['./src/styles/owl.carousel.min.css', './src/styles/owl.theme.default.min.css', './src/styles/sass.scss', './src/styles/main.scss'])
//     return gulp.src(['./src/styles/sass.scss', './src/styles/main.scss'])
//         .pipe(sass().on('error', sass.logError))
//         .pipe(concatCss('style.css'))
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         // .pipe(replace('../', '../src/'))
//         .pipe(gulp.dest('./dist'));
// }

function defaultTask() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(concatCss('style.css'))
        .pipe(cssmin())
        .pipe(rename({basename: 'style', suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.default = defaultTask
exports.watch = function () {
    gulp.watch(['./src/styles/main.scss'], gulp.series('default'));
}