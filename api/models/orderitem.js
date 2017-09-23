"use strict";

module.exports = function(sequelize, DataTypes) {

  const OrderItem = sequelize.define('orderitem', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true },
      orderid: { type: DataTypes.INTEGER(11) },
      dishid: { type: DataTypes.INTEGER(11) },
      qty: { type: DataTypes.INTEGER(11) },
      createdate: { type: DataTypes.DATE },
      state: { type: DataTypes.INTEGER(1) }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  ); 

  OrderItem.associate = function(models) {
    OrderItem.belongsTo(models['dish'], { 
      foreignKey: 'dishid'
    });  
  }  

  return OrderItem;
};