"use strict";

module.exports = function(sequelize, DataTypes) {
    const Dish = sequelize.define('dish', {
      dishid: { type: DataTypes.INTEGER(11), primaryKey: true, field: 'id'},
      rid: { type: DataTypes.INTEGER(11)},
      groupid: { type: DataTypes.INTEGER(11)},
      name: { type: DataTypes.STRING},
      price: { type: DataTypes.DECIMAL(4, 2)},
      cookbox: { type: DataTypes.INTEGER(1) },
      note: { type: DataTypes.STRING, allowNull: true}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  );
 
  Dish.associate = function(models) {
    Dish.hasOne(models['dishpicture'], { 
      foreignKey: 'dishid'
    });  
  }

  return Dish;
}; 