var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var webpackConfig = require('./webpack.config');

gulp.task('default', ['clean', 'watch', 'webpack']);

gulp.task("webpack", function() {
    return gulp
        .src('./')
        .pipe(webpack(webpackConfig))
        //.pipe(uglify())
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['webpack']);
    gulp.watch('src/*.js', ['webpack']);
});

gulp.task('clean', function() {
    return gulp.src(['build/'], {
            read: false
        })
        .pipe(clean());
});
