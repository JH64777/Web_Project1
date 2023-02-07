const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    codenum: {
      type: DataTypes.STRING(54),
      allowNull: false
    },
    commenter: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(400),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comment',
    timestamps: false
  });
};
