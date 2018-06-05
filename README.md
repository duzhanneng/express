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

$ npm start or $ npm start <appName> <projectName>

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
.editorconfig 这个是对编辑器编写规则的一些配置，如果要用，编辑器安装对应的插件即可（一般插件名称就叫editorconfig）
.eslintrc.js eslint语法检查相关配置，npm start默认开启语法检查，如果需要编辑器动态检查，需安装对应的插件
```

子项目结构（详细的目录结构可看demo1项目）

```bash
assets 资源文件
components 组件库
directives 自定义指令库
entry 入口文件夹
filters 过滤器
lang 语言包
mixins 混合器
mock mock配置
router 路由配置（尽量使用懒加载配置方式）
services 接口api库
static 静态资源（一般存放不需要经过webpack处理的资源）
util 工具包
constant 常量配置（公用常量，映射表等）
store 状态管理库
views 页面
app.vue 根组件
config.js 代理配置、打包地址、多语言转换、是否启用pxtorem插件配置等
index.html 

用bgy-pb快速生成的子项目并不会所有文件都创建，需要用到自己创建就好

```

路径别名说明

```bash
路径别名配置可在'config/alias.js'看到

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
1. 子项目之间相互切换方法

* 手动更改config下的_config.js文件,执行$ npm start
* 执行$ npm start <appName> <projectName>

2. 多入口使用（可参考demo2项目）

* 子项目可支持多入口模式，要把所有入口文件放到entry文件夹里面，入口html文件名称必须和entry里面的入口文件名称一一对应
* 多入口使用路由使用h5 history模式需分别配置路由，并配置跟入口文件相同名称的基页（bash属性）

3. 静态资源static说明

* 子项目的static文件夹需要自行创建，打包后的静态资源都会直接复制到打包后的static文件夹
* static里面的文件夹分类建议：
  css 存放样式文件
  img 存放图片文件
  js 存放js文件
  media 存放多媒体文件
  fonts 存放字体文件 

4. 路由建议采用懒加载方式配置

  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@views/page1')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('@views/page2')
    },
    ...
  ]

5. 子项目生成后默认引入flexible.js（移动端设配方案），如不需要请自行在index.html注释或删除

```

如果你所使用的过程中有任何疑问或者建议，欢迎提出！
