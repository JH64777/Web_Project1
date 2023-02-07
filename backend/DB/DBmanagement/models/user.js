const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    user_password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_nickname: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: "user_nickname"
    },
    salt_key: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_nickname",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_nickname" },
        ]
      },
    ]
  });
};
