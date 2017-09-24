"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const Country = sequelize.define('country', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      countrycode2: { type: DataTypes.STRING(4)},
      countrycode3: { type: DataTypes.STRING(4)},
      countryprefix: { type: DataTypes.STRING(8)},
      countryname: { type: DataTypes.STRING(64)}
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return Country;
};