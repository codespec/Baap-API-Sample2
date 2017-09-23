"use strict";

module.exports = function(sequelize, DataTypes) {

  const Restaurant = sequelize.define('restaurant', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      createdate: { type: DataTypes.DATE, allowNull: true},
      name: { type: DataTypes.STRING(100)},
      userid: { type: DataTypes.STRING(100)},
      password: { type: DataTypes.STRING(100)},
      email: { type: DataTypes.STRING(100)},
      phone: { type: DataTypes.STRING(100)},
      level: { type: DataTypes.INTEGER(1) },
      status: { type: DataTypes.ENUM('Y', 'N') },      
      note: { type: DataTypes.STRING(500), allowNull: true},
      tax: { type: DataTypes.DECIMAL(5, 2) }
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  ); 

  Restaurant.associate = function(models) {
    Restaurant.belongsToMany(models['customer'], { foreignKey: 'rid', 
              through: {
                model: models['customermap'],
                unique: false
              },
              constraints: false 
            });        
  }  

  return Restaurant;

};