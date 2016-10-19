var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('compass', () => {
    gulp.src(['src/sass/base.scss'])
        .pipe(compass({
            css: 'static/css',
            sass: 'src/sass',
            style: 'compressed'
        })
            .on('error', gutil.log))
        .pipe(autoprefixer({
            browsers: ['>0.5%'],
            cascade: false,
        }))
        .pipe(gulp.dest('static/css'));
});


gulp.task('watch', () => {
    gulp.watch('src/sass/base.scss', ['compass']);
    gulp.watch('src/sass/**/*.scss', ['compass']);
});


gulp.task('default', ['compass', 'watch']);