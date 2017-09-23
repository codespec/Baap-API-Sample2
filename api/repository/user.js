var models  = require('../models');
var crypto = require('crypto'); 

module.exports = function() {
  return {
    userList : [],
    
    /*
      * Save the user inside the "db".
      */
    save(user) {
      //user.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a user with a given id or return all the customers 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models['user'].findOne({
          attributes: ['id','userid','name'],
          where: {id: id}
        }).then(user => {
          res.json(user);
        });        
      }
      else {
        models['user'].findAll({
          attributes: ['id','userid','name']
        }).then(users => {
          res.json({ users: users});
        });
      }
    },   

    /*
      * Delete a user with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a user with the given id
      */
    update(id, user) {
      return 1;
    }       
  }
};    