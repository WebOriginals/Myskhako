var gulp = require('gulp'), // Gulp
    sass = require('gulp-sass'), //SASS
    less = require('gulp-less'), //LESS
    autoprefixer = require('gulp-autoprefixer'), // Добавление префиксов
    concat = require('gulp-concat'), // Конкатенация файлов
    csso = require('gulp-csso'), // Минификация CSS-файлов
    plumber = require('gulp-plumber'), // Обработка ошибок
    rename = require("gulp-rename"), // Переименование файлов
    sourcemaps = require('gulp-sourcemaps'), // Source maps
    uglify = require('gulp-uglify'), // Минификация JS-файлов
    watch = require('gulp-watch'),
    connect = require('gulp-connect');


gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 20 versions', '> 0%'], { cascade: true }))
        .pipe(csso())
        .pipe(gulp.dest('css/'));
});

gulp.task('less', function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(autoprefixer(['last 20 versions', '> 0%'], { cascade: true }))
        .pipe(csso())
        .pipe(gulp.dest('css/'));
});

gulp.task('min-js', function () {
    gulp.src('js/*.js')  //return нужен?
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/min/'));
});

gulp.task('connect', () => {
    connect.server({
        root: ['./'],
        livereload: true,
        port: '3000',
    });
});

gulp.task('watch', ['sass', 'less', 'min-js'], function() {
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('js/*.js', ['min-js']);
});

gulp.task('server', ['watch', 'connect']);

gulp.task('default', ['watch']); 
