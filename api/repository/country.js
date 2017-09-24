var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {

    find(id,res) {
      if(id > 0) {
        models['country'].findOne({
          where: {id: id}
        }).then(areacode => {
          res.json(areacode);
        });        
      }
      else {
        models['country'].findAll({
        }).then(areacodes => {
          res.json({ countries: areacodes});
        });
      }
    } 

  }
};    