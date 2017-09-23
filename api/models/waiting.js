"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const waiting = sequelize.define('waiting', {
      id: { type: DataTypes.INTEGER(11), primaryKey: true},
      rid: { type: DataTypes.INTEGER(11)},
      cid: { type: DataTypes.INTEGER(11)},
      name: { type: DataTypes.STRING},
      createdate: { type: DataTypes.DATE, allowNull: true},
      status: { type: DataTypes.INTEGER(11) },
      note: { type: DataTypes.STRING, allowNull: true}
    },
    {
      freezeTableName: true,
      timestamps: false,   
    }
  );
  
  return waiting;
};