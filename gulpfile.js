// import imagemin from 'gulp-imagemin'
let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
// const imagemin = require('gulp-imagemin');

gulp.task('scss', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
})

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
        // gulp.watch('app/js/*.js', gulp.parallel('img'))
})

gulp.task('default', gulp.parallel('browser-sync', 'watch'))