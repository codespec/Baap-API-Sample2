"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const Customer = sequelize.define('customer', {
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

  Customer.associate = function(models) {
    Customer.belongsToMany(models['restaurant'], { foreignKey: 'cid', 
              through: {
                model: models['customermap'],
                unique: false
              },
              constraints: false 
            });    
  }   

  return Customer;
};