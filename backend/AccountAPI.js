const mysql = require('mysql');
const ConnectionData = { host : 'localhost', port : 3306, user : 'root', password : 'Your password', database : 'test' };

function InsertData(command){
    let output; // the return value of this function
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

function CheckID(command){
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

module.exports = { Insert : InsertData, Check : CheckID };

/*
if(err){
            console.log(err);
        }
        if(results.length == 0){ // if there is no same id in Database
            console.log(results);
            output = { "response" : true };
            console.log(output);
        }
        else { // if there is same id in Database
            output = { "response" : false };
        }
        connection.end();
        /*let pro = new Promise((resolve) => {
            if(err) {
                console(err);
            }
            else if(results.length == 0){
                resolve(1000);
            }
            else{
                resolve(100);
            }
            connection.end();
        });
        
        pro
        .then((resolve) => {return resolve;})
        .catch((rejected) => console.log(rejected));*/