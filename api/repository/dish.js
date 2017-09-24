var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {
    dishList : [],
    
    /*
      * Save the dish inside the "db".
      */
    save(dish) {
      //dish.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a dish with a given id or return all the customers 
      * if the id is undefined.
      */
    find(id,res) {
      if(id > 0) {
        models['dish'].findOne({
          include: {
            model: models['dishpicture'], attributes: ['filename']
          },          
          where: {dishid: id}
        }).then(dish => {
          res.json(dish);
        });        
      }
      else {
        models['dish'].findAll({
          include: {
            model: models['dishpicture'], attributes: ['filename']
          }
        }).then(dishes => {
          res.json({ dishes: dishes});
        });
      }
    },

    /*
      * Delete a dish with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a dish with the given id
      */
    update(id, dish) {
      return 1;
    }       
  }
};    