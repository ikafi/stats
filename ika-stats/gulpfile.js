var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');

var WEB_ROOT = 'src/main/webapp/';

gulp.task('js', function() {
    browserify({ entries: WEB_ROOT + 'assets/js/src/App.js' })
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(WEB_ROOT + 'public/js/'));
});

gulp.task("css", function () {
    return gulp.src(WEB_ROOT + "assets/sass/**.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(WEB_ROOT + "public/css"));
});

gulp.task('watch', function() {
    gulp.watch(WEB_ROOT + 'assets/js/src/{*,*/*}.{js,jsx}', ['js']);
    gulp.watch(WEB_ROOT + 'assets/sass/**.scss', ['css']);
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['build', 'watch']);