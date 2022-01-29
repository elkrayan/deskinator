const path = require('path')
const Dotenv = require('dotenv-webpack')
let mix = require('laravel-mix')

js('src/js/app.js', 'dist/js')
    .sass('src/sass/app.scss', 'dist/css')