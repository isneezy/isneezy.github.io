var gulp = require("gulp");
var elixir = require('laravel-elixir');
var jade = require('gulp-jade');
var data = require('gulp-data');
elixir.config.bowerDir = 'vendor';

elixir.extend("jade",function () {

        return gulp.src("resources/jade/index.jade")
            .pipe(jade({
                pretty: true,
                data: require('./data.json')
            }))
            .pipe(gulp.dest(""));
});


elixir(function (mix) {
    mix.sass('style.scss')

        .scripts([
            '../../../vendor/jquery/dist/jquery.js',
            '../../../vendor/simplr-smoothscroll/lib/jquery.simplr.smoothscroll.js',
        ],'public/js/vendor.js')

        .scripts([
            'functions.js',
            'menu.js',
            'index.js',
        ],'public/js/app.js')

        .jade();
});