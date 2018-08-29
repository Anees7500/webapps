var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');


gulp.task('connect-dev', function() {
        connect.server({
            root: 'src/',
            port: 8000
        });
    });

gulp.task('connect-prod', function() {
        connect.server({
            root: 'build/',
            port:8001
        });
    });
    gulp.task('default',['connect-dev']);
