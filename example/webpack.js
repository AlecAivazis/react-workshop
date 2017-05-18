// webpack imports
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// local imports
var projectPaths = require('../config/projectPaths')

var baseConfig = require(projectPaths.webpackConfig)

// export webpack configuration object
module.exports = Object.assign({}, baseConfig, {
    entry: ['example/index.js'],
    plugins: baseConfig.plugins.concat([
        new HtmlWebpackPlugin({
            inject: true,
            template: 'example/index.html'
        })
    ])
})


// end of file
