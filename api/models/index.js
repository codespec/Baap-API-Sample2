"use strict";

var fs        = require("fs");
var path      = require("path");

var Sequelize = require('sequelize');
const dbconfig  = require('../../config/config.js');

//console.log("sequelize start");

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.hostname,
  dialect: dbconfig.dialect,
  logging: console.log,  
  define: {  
    timestamps: false  
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var db        = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    //console.log(model.name);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;