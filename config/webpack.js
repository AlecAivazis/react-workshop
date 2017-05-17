// webpack imports
var webpack = require('webpack')
var process = require('process')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// local imports
var projectPaths = require('./projectPaths')

// default to using development configuration
var devtool = ''

var entry = [projectPaths.entry]

const { dir: buildDir, base: buildName } = path.parse(projectPaths.build)

// the initial set of plugins
var plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'dev',
    }),
]
// if we are building for production
if (process.env.NODE_ENV === 'production') {
    // use production plugins
    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
        })
    )
} else {
    // use source maps
    devtool = 'inline-source-map'
}

// export webpack configuration object
module.exports = {
    entry: entry,
    output: {
        path: buildDir,
        filename: buildName,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: projectPaths.sourceDir
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.(png|jpg|ttf)$/,
                loader: 'url-loader',
                query: {limit: 10000000},
            },

        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [
            projectPaths.sourceDir,
            projectPaths.rootDir,
            'node_modules',
        ],
    },
    plugins: plugins,
    devtool: devtool,
}


// end of file
