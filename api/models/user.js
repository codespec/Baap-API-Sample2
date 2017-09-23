"use strict";

module.exports = function(sequelize, DataTypes) {
  
  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER(11), primaryKey: true},
    rid: { type: DataTypes.INTEGER(11)},
    userid: { type: DataTypes.STRING},
    name: { type: DataTypes.STRING},
    phone: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING}
  },
  {
    freezeTableName: true,
    timestamps: false,    
  }
  );

  return User;
};