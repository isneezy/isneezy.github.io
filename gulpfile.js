var elixir = require('laravel-elixir');
elixir.config.bowerDir = 'vendor';

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
});