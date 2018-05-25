'use strict'
const path = require('path')
const paths = require('./paths')
const fs = require('fs')
const config = require('./')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: false }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.getEntry = () => {
  const entryPath = path.resolve(paths.projectPath, 'entry')
  const entryNames = fs.readdirSync(entryPath).filter(n => /\.js$/g.test(n)).map(n => n.replace(/\.js$/g, ''))
  const entryMap = {}
  entryNames.forEach(name => (entryMap[name] = [path.resolve(entryPath, `${name}.js`)]))
  return entryMap
}

exports.getRewrites = (baseWebpackConfig) => {
  const rewrites = []
  const entryNames = Object.keys(baseWebpackConfig.entry)
  entryNames.forEach(name => {
    rewrites.push(
      { from: entryNames.length > 1 ? new RegExp(`^\/${name}\/.*$`, '') : (/.*/), to: path.posix.join(config.dev.assetsPublicPath, `${name}.html`) }
    )
  })
  return rewrites
}

exports.getHtmlWebpackPlugin = (baseWebpackConfig) => {
  const HtmlWebpackPluginList = []
  const entryNames = Object.keys(baseWebpackConfig.entry)
  entryNames.forEach(name => {
    HtmlWebpackPluginList.push(
      new HtmlWebpackPlugin(Object.assign({
        filename: `${name}.html`,
        template: path.resolve(paths.projectPath, `${name}.html`),
        inject: true,
        excludeChunks: entryNames.filter(n => n !== name)
      }, process.env.NODE_ENV === 'production' ? {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          // removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      } : {}))
    )
  })
  return HtmlWebpackPluginList
}
