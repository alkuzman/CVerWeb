/**
 *
 * Developed as a part of a project founded by Sorsix
 *
 * @Authors
 *  Aleksandar Kuzmanoski
 *
 **/
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    rev = require('gulp-rev-append'),
    eslint = require('gulp-eslint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    url = require('url'),
    proxy = require('proxy-middleware'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    gulpHeader = require("gulp-header");
    reload = browserSync.reload,
    fs = require("fs");


var CSS_LIB = [
    /*'app/bower_components/html5-boilerplate/dist/css/normalize.css',
    'app/bower_components/html5-boilerplate/dist/css/main.css',*/
    'app/bower_components/tether/dist/css/tether.css',
    'app/bower_components/tether/dist/css/tether-theme-basic.css',
    'app/bower_components/tether/dist/css/tether-theme-arrows.css',
    'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'app/bower_components/angular-material/angular-material.css',
    'app/bower_components/angular-material-icons/angular-material-icons.css'
    //'app/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
    /*'app/bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.min.css',
    'app/bower_components/bootstrap-material-design/dist/css/ripples.min.css',*/
    /*'app/bower_components/angular-material/angular.material.css',*/
    /*'app/bower_components/textAngular/dist/textAngular.css',*/
    /*'app/bower_components/font-awesome/css/font-awesome.min.css'*/
];

var CSS_APP = [
    'app/css/**/*.css',
    'app/css/**/*.scss',
    '!app/css/**/*.min.css'
];

var JS_LIB = [
    'app/bower_components/tether/dist/js/tether.js',
    'app/bower_components/angular/angular.js',
    /*  'app/bower_components/angular-route/angular-route.js',*/
    'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'app/bower_components/angular-resource/angular-resource.min.js',
    'app/bower_components/angular-translate/angular-translate.min.js',
    'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
    'app/bower_components/angular-sanitize/angular-sanitize.min.js',
    'app/bower_components/jquery/dist/jquery.min.js',
    'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'app/bower_components/angular-aria/angular-aria.js',
    'app/bower_components/angular-animate/angular-animate.js',
    'app/bower_components/angular-material/angular-material.js',
    'app/bower_components/angular-messages/angular-messages.js',
    'app/bower_components/angular-material-icons/angular-material-icons.js',
    'app/bower_components/ev-emitter/ev-emitter.js',
    'app/bower_components/desandro-matches-selector/matches-selector.js',
    'app/bower_components/fizzy-ui-utils/utils.js',
    'app/bower_components/get-size/get-size.js',
    'app/bower_components/outlayer/item.js',
    'app/bower_components/outlayer/outlayer.js',
    'app/bower_components/masonry/masonry.js',
    'app/bower_components/imagesloaded/imagesloaded.js'

    /*'app/bower_components/bootstrap-material-design/dist/js/material.min.js',
    'app/bower_components/bootstrap-material-design/dist/js/ripples.min.js',*/
    /*'app/components/version/version.js',
    'app/components/version/version-directive.js',
    'app/components/version/interpolate-filter.js',*/
    /*'app/bower_components/angular-aria/angular-aria.js',
    'app/bower_components/angular-animate/angular-animate.js',
    'app/bower_components/angular-material/angular-material.js'*/
];

var JS_APP = [
    'app/js/**/*.js',
    'app/js/**/*.min.js'
];

var VIEW_APP = [
    'app/views/**/*.html'
]

/**
 *   The location of the resources for deploy
 */
var DESTINATION = 'app/dist/';
/**
 * The single page initial html file. It will be altered
 * by this script.
 */
var INDEX_FILE = 'app/index.html';
/**
 * The name of the angular module
 */
var MODULE_NAME = 'cver';
/**
 * The URL of the back-end API
 */
var API_URL = 'http://localhost:8080/core';
/**
 * Route to which the API calls will be mapped
 */
var API_ROUTE = '/core';

/**
 * Task for concatenation of the js libraries used
 * in this project
 */
gulp.task('concat_js_lib', function () {
    return gulp.src(JS_LIB) // which js files
        .pipe(concat('lib.js')) // concatenate them in lib.js
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(DESTINATION)) // save lib.js in the DESTINATION folder
});

/**
 * Task for concatenation of the css libraries used
 * in this project
 */
gulp.task('concat_css_lib', function () {
    return gulp.src(CSS_LIB) // which css files
        .pipe(concat('lib.css')) // concat them in lib.css
        .pipe(rename({suffix: '.min'}))
        .pipe(uglifycss())
        .pipe(gulp.dest(DESTINATION)) // save lib.css in the DESTINATION folder
});

/**
 * Task for concatenation of the js code defined
 * in this project
 */
gulp.task('concat_js_app', function () {
    return gulp.src(JS_APP)
        .pipe(plumber())
        .pipe(concat('src.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(DESTINATION))
        .pipe(reload({stream: true}));
});

/**
 * Task for concatenation of the css code defined
 * in this project
 */
gulp.task('concat_css_app', function () {
    return gulp.src(CSS_APP)
        .pipe(plumber())
        .pipe(concat('app.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglifycss())
        .pipe(gulp.dest(DESTINATION))
        .pipe(reload({stream: true}));
});

/**
 * Task for concatenation of the html templates defined
 * in this project
 */
gulp.task('templates', function () {
    return gulp.src(VIEW_APP) // which html files
        .pipe(
            templateCache('templates.js', { // compile them as angular templates
                module: MODULE_NAME,        // from module MODULE_NAME
                root: ''             // of the app
            }))
        .pipe(gulp.dest(DESTINATION))
        .pipe(reload({stream: true}));
});

/**
 * Task for adding the revision as parameter
 * for cache braking
 */
gulp.task('cache-break', function () {
    return gulp.src(INDEX_FILE) // use the INDEX_FILE as source
        .pipe(rev())            // append the revision to all resources
        .pipe(gulp.dest('app/'));  // save the modified file at the same destination
});

gulp.task('fonts', function() {
    return gulp.src('app/bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('app/fonts/'));
});

var tasks = [
    'concat_js_lib',
    'concat_css_lib',
    'concat_js_app',
    'concat_css_app',
    'templates',
    'fonts'
];

gulp.task('build', tasks, function () {
    gulp.start('cache-break');
});

gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(reload({stream: true}));
});


gulp.task('watch', function () {
    gulp.watch('app/js/**/*.js', ['concat_js_app', 'cache-break']);
    gulp.watch('app/views/**/*.html', ['templates', 'cache-break']);
    gulp.watch('app/css/**/*.css', ['concat_css_app', 'cache-break']);
    gulp.watch('app/translate/**/*.json', ['concat_js_app', 'cache-break']);
});

gulp.task('serve', function () {
    connect.server({
        port: 8000,
        livereload: true,
        baseDir: "./app/",
        middleware: function (connect, opt) {
            return [
                (function () {
                    var options = url.parse(API_URL);
                    options.route = API_ROUTE;
                    return proxy(options);
                })()
            ];
        }
    });
});

gulp.task("browser-sync", function () {
    var proxyOptions = url.parse(API_URL);
    proxyOptions.route = API_ROUTE;

    browserSync({
        open: true,
        port: 3000,
        server: {
            baseDir: "./app/",
            middleware: [proxy(proxyOptions)]
        }
    });
});

gulp.task('start', ['templates', 'browser-sync', 'watch']);

gulp.task('package', tasks);

var runTasks = [
    'package',
    'start'
];

gulp.task("run", runTasks);