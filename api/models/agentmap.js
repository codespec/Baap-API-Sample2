"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const AgentMAP = sequelize.define('agentmap', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      rid: { type: DataTypes.INTEGER(11)},
      agentid: { type: DataTypes.INTEGER(11)},
      creatdate: { type: DataTypes.DATE, allowNull: true},
      status: { type: DataTypes.ENUM('Y', 'N') }
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  ); 

  AgentMAP.associate = function(models) {
  
  }  

  return AgentMAP;
};