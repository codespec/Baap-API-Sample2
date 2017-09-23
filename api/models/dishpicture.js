"use strict";

module.exports = function(sequelize, DataTypes) {
  const DishPicture = sequelize.define('dishpicture', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      rid: { type: DataTypes.INTEGER(11)},
      dishid: { type: DataTypes.INTEGER(11)},
      filename: { type: DataTypes.STRING}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  );

  DishPicture.associate = function(models) {
    DishPicture.belongsTo(models['dish'], { 
      foreignKey: 'dishid'
    });  
  }  

  return DishPicture;
}