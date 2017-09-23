"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const agent = sequelize.define('agent', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      name: { type: DataTypes.STRING(100)},
      userid: { type: DataTypes.STRING(100)},
      password: { type: DataTypes.STRING(100)},
      email: { type: DataTypes.STRING(100)},
      phone: { type: DataTypes.STRING(100)},
      createdate: { type: DataTypes.DATE, allowNull: true},
      level: { type: DataTypes.INTEGER(1) },
      status: { type: DataTypes.ENUM('Y', 'N') },
      note: { type: DataTypes.STRING, allowNull: true}      
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return agent;
};