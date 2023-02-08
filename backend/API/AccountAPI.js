const mysql = require('mysql');
const ConnectionData = { host : 'localhost', port : 3306, user : 'root', password : 'your password', database : 'test' };

function InsertData(command){
    const connection = mysql.createConnection(ConnectionData);
    connection.connect;
    return new Promise((resolve, rejects) => {
        connection.query(command, function(err, results, fields){
            if(err){
                console.log(err);
                rejects({ "response" : "error" });
            }
            else {
                resolve({ "response" : "Well Done!" });
            }
    });
    connection.end();
});
}

function CheckSame(command){
    const connection = mysql.createConnection(ConnectionData);
    connection.connect;
    return new Promise((resolve, rejects) => {
        connection.query(command, function(err, rows, fields){
            if(err){
                rejects(err);
            }
            else if(rows.length == 0){
                resolve({"response" : true});
            }
            else{
                resolve({"response" : false});
            }
        });
        connection.end();
    });
}

module.exports = { Insert : InsertData, Check : CheckSame };