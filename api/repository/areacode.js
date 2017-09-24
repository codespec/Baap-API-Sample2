var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {

    find(id,res) {
      if(id > 0) {
        models['areacode'].findOne({
          where: {id: id}
        }).then(areacode => {
          res.json(areacode);
        });        
      }
      else {
        models['areacode'].findAll({
          attributes: ['areacode','areaname'],
          where: {"countrycode3":"USA", areaname: {$ne: ''}}
        }).then(areacodes => {
          res.json({areacodes});
        });
      }
    } 

  }
}; 