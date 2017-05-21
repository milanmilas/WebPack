var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
    test: [/\.js$/,/\.es6$/],
    excluede: /node_modules/,
    loader: WebpackStrip.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

module.export = devConfig;