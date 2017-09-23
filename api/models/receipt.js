"use strict";

module.exports = function(sequelize, DataTypes) {

  const Receipt = sequelize.define('receipt', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      rid: { type: DataTypes.INTEGER(11)},
      cid: { type: DataTypes.INTEGER(11)},
      orderid: { type: DataTypes.INTEGER(11)}        
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  );

  Receipt.associate = function(models) {
    //Receipt.hasOne(models['order'], { 
    //  foreignKey: 'orderid'
    //});  
  }

  return Receipt;

};