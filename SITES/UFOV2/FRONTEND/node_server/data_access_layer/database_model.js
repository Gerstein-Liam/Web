exports._m_DBQuery_Promise = Database_Query;
var mysql = require('mysql');

var db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ufo"
});
db_connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
function Database_Query(sql_query,values) {
    return new Promise(function (resolve, reject) {
        db_connection.query(sql_query, values, function (err, result, field) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}

