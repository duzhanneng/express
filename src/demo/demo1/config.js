const path = require('path')

module.exports = {
  dev: {
    // proxy代理配置
    proxyTable: {}
  },
  build: {
    // build输出路径
    assetsRoot: path.resolve(process.cwd(), '../dist/demo/demo1')
  },
  excel: {
    // excel输入，输出地址，转换的文件类型
    input: 'https://docs.google.com/spreadsheets/d/1t9EOu_NxgidGel-tX5mW3gC3gqxZatqwjz-pCeGhYw4/edit#gid=0', // 线上文件路径
    // input: path.join(__dirname, './lang/lang.xlsx'), // 本地文件路径
    output: path.join(__dirname, './lang'),
    // type有js和json两种选择
    dataType: 'json',
    // 如果是js文件输出，则此属性有用并表明是一个单纯js文件还是以模块导出。js文件默认模块导出，也即默认true
    module: true
  },
  // 是否启用postcss-pxtorem插件 https://github.com/cuth/postcss-pxtorem
  pxtorem: true
}
