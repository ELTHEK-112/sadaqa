var elixir = require('laravel-elixir');


elixir.config.sourcemaps = false; 
var gulp = require('gulp');


elixir(function (mix){
   
      mix.sass('resources/assets/sass/app.scss','resources/assets/css');
      mix.styles(
             [
                 'css/app.css','bower/vendor/slick-carousel/slick/slick.css'
                
             ], 'htdocs/css/all.css', 'resources/assets'
                
      );
      var bowerpath = 'bower/vendor';
      mix.scripts(
          [
             bowerpath + '/jquery/dist/jquery.min.js',
             bowerpath + '/foundation-sites/dist/js/foundation.min.js',
             bowerpath +  '/slick-carousel/slick/slick.min.js'
          ],'htdocs/js/all.js','resources/assets');

});