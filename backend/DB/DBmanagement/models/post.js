const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post', {
    num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    writer: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    codenum: {
      type: DataTypes.STRING(54),
      allowNull: false,
      unique: "codenum"
    },
    contents: {
      type: DataTypes.STRING(800),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "num" },
        ]
      },
      {
        name: "codenum",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codenum" },
        ]
      },
    ]
  });
};
