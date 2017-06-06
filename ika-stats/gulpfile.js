var gulp        = require('gulp');
var babel       = require('gulp-babel');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var minify      = require('gulp-minify');

var WEB_ROOT = 'src/main/webapp/';

gulp.task('libs', function() {
    return gulp
        .src([
            'node_modules/react/dist/react.min.js',
            'node_modules/react-dom/dist/react-dom.min.js',
            'node_modules/react-burger-menu/dist/react-burger-menu.min.js'
        ])
        .pipe(gulp.dest(WEB_ROOT + 'public/lib'));
});

gulp.task('js', function() {
    return gulp.src(WEB_ROOT + 'assets/js/src/**.{js,jsx}')
        .pipe(sourcemaps.init())
        .pipe(babel({
            compact: false
        }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(WEB_ROOT + 'public/js'));
});

gulp.task("css", function () {
    return gulp.src(WEB_ROOT + "assets/sass/**")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(WEB_ROOT + "public/css"));
});

gulp.task('watch', function() {
    gulp.watch(WEB_ROOT + 'assets/js/src/**/*.{js,jsx}', ['concat']);
});

gulp.task('build', ['libs', 'js', 'css']);
gulp.task('default', ['build', 'watch']);