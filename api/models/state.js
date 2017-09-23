"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const State = sequelize.define('state', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      countrycode: { type: DataTypes.STRING(4)},
      statecode: { type: DataTypes.STRING(20)},
      statename: { type: DataTypes.STRING(50)}
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return State;
};