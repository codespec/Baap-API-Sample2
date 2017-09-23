var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {
    dishList : [],
    
    /*
      * Save the dinetable inside the "db".
      */
    save(dinetable) {
      //dinetable.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a dinetable with a given id or return all the customers 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models['dtable'].findOne({
          where: {id: id}
        }).then(dinetable => {
          res.json(dinetable);
        });        
      }
      else {
        models['dtable'].findAll({
        }).then(dtables => {
          res.json({ dinetables: dinetables});
        });
      }
    },

    /*
      * Delete a dinetable with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a dinetable with the given id
      */
    update(id, dinetable) {
      return 1;
    }       
  }
};    