var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

// 连接数据库
// var conn = mysql.createConnection(models.mysql);

// conn.connect();
var jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户
router.post('/addUser', function(req, res) {
  console.log(req.body)
  var sql = $sql.user.add;
  var params = req.body;
  var str = ''
  req.on('data', function(chunk) {
    str += chunk
  })
  req.on('end', function(chunk) {
    console.log(str)
  })
  if (!params.username || !params.password) {
    res.send(400);
    return;
  }
  // console.log(params);
  conn.query(sql, [params.username, params.password], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json({
        resultCode: 200,
        resultData: null,
        resultMessage: ''
      });
    }
  })
});

// 用户登录
router.get('/getUser', function(req, res) {
  // res.send('retrunJson');
  var sql = $sql.user.query;
  // console.log(req.cookies);
  var params = req.query;
  conn.query(sql, [params.username, params.password], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result.length === 1) {
      res.cookie('testApi', result[0].id, { expires: new Date(Date.now() + 900000), httpOnly: true });
      res.json({
        resultCode: 200,
        resultData: null,
        resultMessage: ''
      });
    } else {
      res.json(500, {
        resultCode: 500,
        resultData: null,
        resultMessage: '账号或密码错误'
      });
    }
  })
});

// 退出登录
router.get('/loginOut', function(req, res) {
  res.clearCookie('testApi');
  res.json({
    resultCode: 200,
    resultData: null,
    resultMessage: '退出成功'
  });
});

// 获取权限
router.get('/getPermission', function(req, res) {
  res.json({
    resultCode: 200,
    resultData: 'root',
    resultMessage: ''
  });
});

module.exports = router;
