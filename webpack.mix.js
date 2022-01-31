const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
        .js('resources/js/screen.js', 'public/js')
    .postCss('resources/css/reset.css', 'public/css')
    .sass('resources/scss/master.scss', 'public/css')
    .sass('resources/scss/app.scss', 'public/css')
    .sass('resources/scss/media.scss', 'public/css')
    .sass('resources/scss/deskinator.scss', 'public/css');
