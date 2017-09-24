var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {

    find(id,res) {
      if(id > 0) {
        models['state'].findOne({
          where: {id: id}
        }).then(state => {
          res.json(state);
        });        
      }
      else {
        models['state'].findAll({
          attributes: ['statecode','statename'],
          where: {"countrycode":"USA", statename: {$ne: ''}}          
        }).then(states => {
          res.json({ states: states});
        });
      }
    } 

  }
}; 