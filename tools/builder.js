var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('app/systemjs.config.js')
    .then(function(){
        var outputFile = 'public/libs/bundle.min.js';
        return builder.buildStatic('app', outputFile, {
            minify: true,
            mangle: true,
            rollup: true
        });
    })
    .then(function() {
        console.log('bundle built successfully!');
    });