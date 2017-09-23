"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const Address = sequelize.define('address', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      type: { type: DataTypes.ENUM('customer', 'restaurant', 'agent') },
      tid: { type: DataTypes.INTEGER(11)},
      address1: { type: DataTypes.STRING(100)},
      address2: { type: DataTypes.STRING(100)},
      city: { type: DataTypes.STRING(100)},
      state: { type: DataTypes.STRING(100)},
      zip: { type: DataTypes.STRING(10)},
      country: { type: DataTypes.STRING(3)},
      lat: { type: DataTypes.FLOAT},
      lng: { type: DataTypes.FLOAT}
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return Address;
};