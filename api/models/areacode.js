"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const areacode = sequelize.define('areacode', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      areacode: { type: DataTypes.STRING(4)},
      countrycode3: { type: DataTypes.STRING(4)},
      areaname: { type: DataTypes.STRING(64)}
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return areacode;
};