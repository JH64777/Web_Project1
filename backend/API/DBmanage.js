const model = require('../DB/DBmanagement/models'); // You need to have models in your Disk

function Insert(table, value) { // You need to match column names in DB and value
    return model[table].create(value);
}

function SelectWhere(table, value){ // You need to match column names in DB and value
    return model[table].findAll({
        where : value
    })
} // ex> Select * from user where user_nickname = "example" => table = 'user', value = { user_nickname : "example" }

function SelectAll(table){
    return model[table].findAll();
}

function SelectOffset(table, index, row){
    return model[table].findAll({
        attributes : row,
        offset : index*5 - 5,
        limit : index*5
    });
}

module.exports = {Insert : Insert, SelectWhere : SelectWhere, Select : SelectAll, SelectLimit : SelectOffset};
