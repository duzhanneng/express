const { appName, projectName } = require('./config/_config.js')
const pxtorem = require(`./src/${appName}/${projectName}/config.js`).pxtorem

const postcssrc = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {}
  }
}

pxtorem &&
  (postcssrc.plugins['postcss-pxtorem'] = {
    rootValue: 75,
    propList: ['*']
  })

module.exports = postcssrc
