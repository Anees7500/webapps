var gulp = require('gulp'),
    connect = require('gulp-connect'),
    gulpNgConfig = require('gulp-ng-config');

gulp.task('connect-dev', function() {
    connect.server({
        root: 'src/',
        port: 3003
    });
});

gulp.task('default', ['connect-dev','make-config-module']);
gulp.task('make-config-module', function () {
	gulp
		.src("src/config.properties")
		.pipe(gulpNgConfig("salesApp.config"))
		.pipe(gulp.dest("src/"));
});