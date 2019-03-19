var gulp = require('gulp');
connect = require('gulp-connect');
concat = require('gulp-concat');
gulpNgConfig = require('gulp-ng-config');

gulp.task('connect-dev', function () {
	connect.server({
		root: 'src/',
		port: 1000
	});
});

gulp.task('connect-prod', function () {
	connect.server({
		root: 'build/',
		port: 1001
	});
});

gulp.task('default', ['make-config-module','connect-dev']);

gulp.task('make-config-module', function () {
	gulp
		.src("src/config.properties")
		.pipe(gulpNgConfig("clientApp.config"))
		.pipe(gulp.dest("src/"));
});
