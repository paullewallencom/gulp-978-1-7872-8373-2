// Load Node Modules/Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Process Styles
gulp.task('styles', function() {
    return gulp.src('css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/'));
});

// Process Scripts
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('css/*.css', 'styles');
    gulp.watch('js/*.js', 'scripts');
});

// Default Task
gulp.task('default', gulp.parallel('styles', 'scripts', 'watch'));
