"use strict";

module.exports = function(sequelize, DataTypes) {

  const Restaurant = sequelize.define('restaurant', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      userid: { type: DataTypes.STRING},
      name: { type: DataTypes.STRING},
      phone: { type: DataTypes.STRING},
      email: { type: DataTypes.STRING},
      note: { type: DataTypes.STRING, allowNull: true}
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