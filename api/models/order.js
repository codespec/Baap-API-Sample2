"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const Order = sequelize.define('orderbox', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      rid: { type: DataTypes.INTEGER(11)},
      cid: { type: DataTypes.INTEGER(11)},
      ordertype: { type: DataTypes.INTEGER(1)},
      orderdate: { type: DataTypes.DATE, allowNull: true},
      scheduledate: { type: DataTypes.DATE, allowNull: true},
      takeoutdate: { type: DataTypes.DATE, allowNull: true},
      rstate: { type: DataTypes.INTEGER(1)},
      cstate: { type: DataTypes.INTEGER(1)},
      reward: { type: DataTypes.INTEGER(1)}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  );

  Order.associate = function(models) {
    Order.hasMany(models['orderitem'], { 
      foreignKey: 'orderid'
    });  
  }  

  return Order;
}