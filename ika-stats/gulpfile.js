var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var uglify       = require('gulp-uglify');
var cleanCSS     = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concatCSS    = require('gulp-concat-css');
var streamify    = require('gulp-streamify');

var WEB_ROOT = 'src/main/webapp/';

gulp.task('js', function() {
    browserify({
        entries: WEB_ROOT + 'assets/js/src/App.js',
        extensions: '.jsx'
    })
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(WEB_ROOT + 'public/js/'));
});

gulp.task("css", function () {
    return gulp.src(WEB_ROOT + "assets/sass/**.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concatCSS('bundle.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(WEB_ROOT + "public/css"));
});

gulp.task('watch', function() {
    gulp.watch(WEB_ROOT + 'assets/js/src/{*,*/*}.{js,jsx}', ['js']);
    gulp.watch(WEB_ROOT + 'assets/sass/**.scss', ['css']);
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['build', 'watch']);