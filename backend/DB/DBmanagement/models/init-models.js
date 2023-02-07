var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _Testing = require("./Testing");
var _Testings = require("./Testings");
var _comment = require("./comment");
var _post = require("./post");
var _user = require("./user");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Testing = _Testing(sequelize, DataTypes);
  var Testings = _Testings(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    SequelizeMeta,
    Testing,
    Testings,
    comment,
    post,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
