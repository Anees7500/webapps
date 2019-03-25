var gulp = require('gulp');
connect = require('gulp-connect');
concat = require('gulp-concat');
gulpNgConfig = require('gulp-ng-config');

gulp.task('connect-dev', function() {
    connect.server({
        root: 'src/',
        port: 9000
    });
});

gulp.task('connect-prod', function() {
    connect.server({
        root: 'build/',
        port: 9001
    });
});
gulp.task('make-config-module', function() {
    gulp
        .src("src/config.json")
        .pipe(gulpNgConfig("empApp.config"))
        .pipe(gulp.dest("src/"));
});
gulp.task('watch', function() {
    gulp.watch('src/config.json', ['make-config-module'])
});

gulp.task('default', ['make-config-module', 'connect-dev', 'watch']);