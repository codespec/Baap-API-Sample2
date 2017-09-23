var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {
    dishList : [],
    
    /*
      * Save the waiting inside the "db".
      */
    save(waiting) {
      //waiting.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a waiting with a given id or return all the customers 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models['waiting'].findOne({
          where: {id: id}
        }).then(waiting => {
          res.json(waiting);
        });        
      }
      else {
        models['waiting'].findAll({
        }).then(waitings => {
          res.json({ waitings: waitings});
        });
      }
    },

    /*
      * Delete a waiting with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a waiting with the given id
      */
    update(id, dwaitingish) {
      return 1;
    }       
  }
};    