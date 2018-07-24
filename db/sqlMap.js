// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, username, password) values (0, ?, ?)',
        query: 'select * from user where username = ? and password = ?'
    }
}
module.exports = sqlMap;