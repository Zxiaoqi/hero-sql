const mysql = require('mysql');

var varySql = ({
    sql,
    data,
    callback = () => {}
}) => {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'hero',
        multipleStatements: true
    });
    //连接动作
    connection.connect();
    //执行数据操作
    if (data != []) {
        connection.query(sql, data, (err, result, fields) => {
            if (err) return callback(err);
            const affectedRows = result.affectedRows;
            if (affectedRows === 1) {
                callback("操作成功");
            } else if (affectedRows === 0) {
                callback("操作失败");
            } else {
                callback(result);
            }
        });
    } else {
        connection.query(sql, (err, result, fields) => {
            if (err) return callback(err);
            const affectedRows = result.affectedRows;
            if (affectedRows === 1) {
                callback("操作成功");
            } else if (affectedRows === 0) {
                callback("操作失败");
            } else {
                callback(result);
            }
        });
    }
    //关闭数据库
    connection.end();
}

//查
var search = ({
    id,
    callback
}) => {
    varySql({
        sql: "select * from hero_list where id=?",
        data: [id],
        callback
    })
}
//查全
var list = ({
    callback
}) => {
    varySql({
        sql: "select * from hero_list",
        data: [],
        callback
    })
}
//增
var add = ({
    data,
    callback
}) => {
    if (data) {
        varySql({
            sql: 'insert into hero_list set ?',
            data: {
                name: data.name,
                skill: data.skill,
                icon: data.icon
            },
            callback
        })
    }
}
//更
var update = ({
    data,
    callback
}) => {
    if (data) {
        const {
            id,
            name,
            skill,
            icon
        } = data;
        varySql({
            sql: `update hero_list set name="${name}", skill="${skill}", icon="${icon}" where id="${id}"`,
            data: [],
            callback
        })
    }
}
//删
var deldata = ({
    id,
    callback
}) => {
    if (id) {
        varySql({
            sql: 'delete from hero_list where id=?',
            data: [id],
            callback
        })
    }
}

exports.varySql = varySql;
exports.search = search;
exports.list = list;
exports.add = add;
exports.update = update;
exports.deldata = deldata;