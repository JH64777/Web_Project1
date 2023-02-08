const model = require('../DB/DBmanagement/models'); // You need to have models in your Disk

function Insert(table, value) { // You need to match column names in DB and value
    return model[table].create(value);
}

function Select(table, value){ // You need to match column names in DB and value
    return model[table].findAll({
        where : value
    })
} // ex> Select * from user where user_nickname = "example" => table = 'user', value = { user_nickname : "example" }

module.exports = {Insert : Insert, Select : Select};