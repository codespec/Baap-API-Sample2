"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const Admin = sequelize.define('admin', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      name: { type: DataTypes.STRING(100)},
      userid: { type: DataTypes.STRING(100)},
      password: { type: DataTypes.STRING(100)},
      email: { type: DataTypes.STRING(100)},
      phone: { type: DataTypes.STRING(100)}
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return Admin;
};