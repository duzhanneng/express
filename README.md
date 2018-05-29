# bgy-fronted-devp

## Getting Started

前言

```bash
项目可依赖于bgy-pb快速生成子项目，全局安装bgy-pb，然后在fronted-devp根目录下执行bgy-pb init

$ npm install bgy-pb -g
$ bgy-pb init

```

下载依赖

```bash
$ npm install or $ cnpm install
```

启动项目

```bash
npm start后面带相应的参数可快速切换子项目

$ npm start or $ npm start appName projectName

```

项目打包

```bash
$ npm run build
```

多语言转换(需全局安装excel-tobe-json2)

```bash
$ npm install excel-tobe-json2 -g
$ npm run excel
```

## Project Instruction

项目结构

```bash
common 公共目录（包括公共的assets、components、xhr入口等）
config 项目配置目录
scripts 对应node执行的相关命令（start、build、excel等）
static 公共静态资源目录
src 这个是子项目的总入口，里面会对项目进行分类（bigo、like、cubetv等）
.editorconfig 这个是对编辑器编写规则的一些配置，如果要用，编辑器安装对应的插件（一般插件名称就叫editorconfig）即可
.eslintrc.js eslint语法检查相关配置，npm start默认开启语法检查，如果需要编辑器动态检查，需安装对应的插件
```

子项目结构

```bash
子项目可支持多入口模式，要把所有入口文件放到entry文件夹里面，入口html文件名称必须和entry里面的入口文件名称一一对应，可参考demo2项目

每个子项目根目录下都会有config.js文件，对应的是该子项目的相关配置（代理配置、打包地址、多语言转换、是否启用pxtorem插件配置等）

详细的目录结构可看demo1项目
```

路径别名说明

```bash
路径别名配置可在'config/alias.js'看到，用bgy-pb快速生成的子项目并不会所有文件都创建，需要用到自己创建就好

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
```

路径别名用法

```bash
js里面调用

例 import xhr from 'XHR'
   import { apiDemo } from '@services/apiDemo'
   import * as apiDemo from '@services/apiDemo'

html、css里面调用（前面要加~）

例 @import '~@assets/css/...'
   <img src="~@assets/img/...">
   background: url('~@assets/img/...') ...
```

特别说明

```bash
子项目之间相互切换方法

1、手动更改config下的_config.js文件,执行$ npm start
2、执行$ npm start appName projectName

多入口使用history模式路由说明

多入口使用路由使用h5 history模式需分别配置路由，并配置跟入口文件相同名称的基页（bash属性），可参考demo2项目的路由配置

```

如果你所使用的过程中有任何疑问或者建议，欢迎提出！
