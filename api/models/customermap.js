"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const CustomerMAP = sequelize.define('customermap', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      rid: { type: DataTypes.INTEGER(11)},
      cid: { type: DataTypes.INTEGER(11)},
      creatdate: { type: DataTypes.DATE, allowNull: true},
      status: { type: DataTypes.ENUM('Y', 'N') }      
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  ); 

  CustomerMAP.associate = function(models) {
  
  }  

  return CustomerMAP;
};