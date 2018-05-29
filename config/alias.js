'use strict'
const path = require('path')
const paths = require('./paths')

const rootPath = paths.rootPath
const commonPath = paths.commonPath
const projectPath = paths.projectPath

module.exports = {
  'COMMON': commonPath,
  'XHR': path.resolve(commonPath, 'xhr'), // 公共xhr入口
  'ASSETS': path.resolve(commonPath, 'assets'), // 公共资源文件
  'COMPONENTS': path.resolve(commonPath, 'components'), // 公共组件库
  '@': projectPath, // 子项目根目录
  '@components': path.resolve(projectPath, 'components'), // 子项目组件库
  '@services': path.resolve(projectPath, 'services'), // 子项目接口api库
  '@views': path.resolve(projectPath, 'views'), // 子项目页面
  '@mixins': path.resolve(projectPath, 'mixins'), // 子项目混合器
  '@util': path.resolve(projectPath, 'util'), // 子项目工具包
  '@assets': path.resolve(projectPath, 'assets'), // 子项目资源文件
  '@lang': path.resolve(projectPath, 'lang'), // 子项目语言包
  '@constant': path.resolve(projectPath, 'constant') // 子项目常量
}
