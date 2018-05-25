const program = require('commander')
const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const ora = require('ora')
const fs = require('fs')
const path = require('path')
const nunjucks = require('nunjucks')

program.parse(process.argv)
const { args } = program

if (args && args.length > 1) {
  const templateDatas = {
    app: args[0],
    project: args[1]
  }
  const templatePath = path.resolve(process.cwd(), 'config/_config.temp.js')
  const targetPath = path.resolve(process.cwd(), 'config/_config.js')
  const res = nunjucks.render(templatePath, templateDatas)
  fs.writeFileSync(targetPath, res)
}

const config = require('../config/webpack.dev.conf')

config.then(res => {
  const spinner = ora('building for development...')
  spinner.start()

  const compiler = webpack(res)
  const devServer = new webpackDevServer(compiler, Object.assign(res.devServer, {
    inline: true,
    progress: true
  }))
  devServer.listen(res.devServer.port, res.devServer.host, (err) => {
    if (err) console.log(err)
  })
  compiler.plugin('done', () => {
    spinner.stop()
  })
})
