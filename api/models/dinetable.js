"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const DineTable = sequelize.define('dtable', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true },
      rid: { type: DataTypes.INTEGER(11) },
      num: { type: DataTypes.INTEGER(2) },
      name: { type: DataTypes.STRING(20) },
      status: { type: DataTypes.INTEGER(1) },
      note: { type: DataTypes.STRING, allowNull: true}     
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return DineTable;
};
