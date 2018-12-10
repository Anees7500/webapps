var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngHtml2Js = require("gulp-ng-html2js"),
    rename = require('gulp-rename'),
    ignore = require('gulp-ignore'),
    minify = require('gulp-minify'),
    gulpNgConfig = require('gulp-ng-config');


gulp.task('connect-dev', function() {
        connect.server({
            root: 'src/',
            port: 3001
        });
    });

gulp.task('connect-prod', function() {
        connect.server({
            root: 'build/',
            port:8001
        });
    });
gulp.task('concat-css', function() {
      return gulp.src(['src/section/**/*.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('src/minifiedfiles/'))
    });
gulp.task('uglify', function() {
      return gulp.src(['src/app.js','src/sections/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/minifiedfiles/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        // .pipe(browserify())
        .pipe(gulp.dest('src/minifiedfiles/'))
    });
gulp.task('minify', function() {
      return gulp.src(['src/app.js','src/sections/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/minifiedfiles/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minify())
        .pipe(gulp.dest('src/minifiedfiles/'))
    });
gulp.task('concat-css', function() {
      return gulp.src(['src/sections/**/*.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('src/minifiedfiles/'))
    });
gulp.task('create-templates', function() {
        return gulp.src('src/**/*.tpl.html')
            .pipe(ngHtml2Js({
                moduleName: "app.templates",
                rename: function(url) {
                    return url.replace('src/', '');
                }
            }))
            .pipe(concat("app.templates.js"))
            .pipe(gulp.dest("src/"))
            .pipe(gulp.dest("build/"));
    });
//Copy the minified files from src to build
gulp.task('copy-files', function() {
        gulp.src(['./src/minifiedfiles/*']).pipe(gulp.dest('build/minifiedfiles/'));
        gulp.src(['./src/font-awesome/**/*']).pipe(gulp.dest('build/font-awesome/'));
        gulp.src(['./src/index.html']).pipe(gulp.dest('build/'));
        gulp.src('./src/image/**/*.{gif,jpg,png,svg}').pipe(gulp.dest('build/image/'));
    });



    gulp.task('make-config-module', function () {
      gulp.src('src/config.properties')
      .pipe(gulpNgConfig('vmApp.config'))
      .pipe(gulp.dest('src/'))
    });
    gulp.task('make-prod-config-module', function () {
      gulp.src('src/config.prod-properties')
      .pipe(gulpNgConfig('vmApp.config'))
      .pipe(gulp.dest('build/'))
    });
    gulp.task('minify-components', function() {
      return gulp.src(['src/bower_components/**/*min.js','!src/bower_components/angular-material/*'])
        .pipe(concat('components.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('src/'))
        .pipe(gulp.dest("build/"));
    });

    gulp.task('concat-components-css', function() {
      return gulp.src(['src/bower_components/**/*.css'])
        .pipe(concat('components.css'))
        .pipe(gulp.dest('src/'))
        .pipe(gulp.dest("build/"));
    });

    gulp.task('concat-components', function() {
      return gulp.src(['src/bower_components/**/*.js','!src/bower_components/angular/*.js','!src/bower_components/**/*min.js','!src/bower_components/**/index.js'])
        .pipe(concat('concate-components.js'))
        // .pipe(browserify('../..'))
        .pipe(gulp.dest('src/'))
        .pipe(gulp.dest("build/"));
    });

    gulp.task('watch', function () {
        gulp.watch('src/sections/**/*.js', ['uglify'])
        gulp.watch('src/**/*.tpl.html', ['create-templates'])
        gulp.watch('src/**/*.css',['concat-css'])
        gulp.watch('src/config.properties',['make-config-module'])
    });

    gulp.task('build', ['minify-components','uglify','concat-css','create-templates','concat-components-css','copy-files','make-prod-config-module']);

    gulp.task('default',['minify-components','concat-css','uglify','concat-components-css','create-templates','make-config-module','copy-files','connect-dev','watch']);
