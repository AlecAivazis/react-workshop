/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')

var rootDir = path.join(__dirname, '..')
var configDir = path.join(rootDir, 'config')
var sourceDir = path.join(rootDir, 'src')
var entryPath = path.join(sourceDir, 'index.js')
var buildPath = path.join(rootDir, 'index.js')

module.exports = {
    // directories
    rootDir: rootDir,
    sourceDir: sourceDir,
    // entry points
    clientEntry: entryPath,
    // built files
    clientBuild: buildPath,
    // globs
    clientBuildGlob: path.join(clientBuild, '*'),
    testGlob: path.join(sourceDir, "**", "*test.js"),
    // configuration files
    webpackConfig: path.join(configDir, 'webpack.js'),
    babelConfig: path.join(configDir, 'babel.json'),
}
