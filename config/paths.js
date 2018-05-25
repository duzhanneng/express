'use strict'
const path = require('path')
const fs = require('fs')
const _config = require('./_config')

const rootPath = fs.realpathSync(process.cwd()) // 项目根目录
const resolve = relativePath => path.resolve(rootPath, relativePath)
const commonPath = resolve('common') // 公共目录
const projectPath = resolve(`src/${_config.appName}/${_config.projectName}`) // 子项目根目录

module.exports = {
  rootPath: rootPath, // 项目根目录
  commonPath: commonPath, // 公共目录
  projectPath: projectPath, // 子项目根目录
  config: resolve('config'), // 项目配置
  static: resolve('static') // 公共静态资源目录
}
