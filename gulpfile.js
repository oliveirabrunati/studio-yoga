const gulp = require('gulp')
const minifyCSS = require('gulp-minify-css')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('minify', async function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
})