"use strict";

module.exports = function(sequelize, DataTypes) {

  const Dishgroup = sequelize.define('dishgroup', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      name: { type: DataTypes.STRING},
      note: { type: DataTypes.STRING, allowNull: true}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  ); 



  return Dishgroup;

};