"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const Customer = sequelize.define('customer', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      name: { type: DataTypes.STRING(100)},
      userid: { type: DataTypes.STRING(100)},
      password: { type: DataTypes.STRING(100)},
      email: { type: DataTypes.STRING(100)},
      phone: { type: DataTypes.STRING(100)},
      level: { type: DataTypes.INTEGER(1) },
      status: { type: DataTypes.ENUM('Y', 'N') },      
      note: { type: DataTypes.STRING(500), allowNull: true},
      authcode: { type: DataTypes.STRING(4) }
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