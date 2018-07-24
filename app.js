// node 后端服务器入口
var http = require('http');
var userApi = require('./api/userApi');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser'); // node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
var cookieParser = require('cookie-parser') // 解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象
var express = require('express');
var app = express();

app.engine( '.html', require( 'ejs' ).__express );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
// app.use('/dzn', express.static(path.join(__dirname, './index.html')))
app.use(express.static(path.join(__dirname, './dist')))
app.use(express.static(path.join(__dirname, './favicon.ico')))

app.get('/', function (req, res) {
  res.render('./dist');
});

//全局处理
app.use(function(req, res, next) {
  // if (/getUser/g.test(req.url)) {
  //   next();
  // } else {
  //   if (req.cookies.testApi) {
  //     next();
  //   } else {
  //     res.send(401);
  //   }
  // }
});

//注册api路由
app.use('/api/userController', userApi);

// 监听端口
app.listen(8082);
app.listen(8087);
console.log('success listen at port:8082,8087......');

// http.createServer(app).listen(8087);
// http.createServer(app).listen(8088);
// console.log('success listen at port:8087,8088......');
