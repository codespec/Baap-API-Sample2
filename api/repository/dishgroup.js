var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {
    dishgroupList : [],
    
    /*
      * Save the dishgroup inside the "db".
      */
    save(dishgroup) {
      //dishgroup.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a dish with a given id or return all the dishgroups 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models['dishgroup'].findOne({
          attributes: ['id','name'],
          where: {id: id}
        }).then(dish => {
          res.json(dish);
        });        
      }
      else {
        models['dishgroup'].findAll({
          attributes: ['id','name']
        }).then(dishgroups => {
          res.json({ dishgroups: dishgroups});
        });
      }
    },

    findbyrestaurant(rid, id, res) {
      if(rid > 0) {
        if(id > 0) {
          models['dishgroup'].findOne({
            attributes: ['id','name'],
            where: {rid: rid,id: id}
          }).then(dishgroups => {
            res.json({ dishgroups: dishgroups});
          });
        }    
        else {
          models['dishgroup'].findAll({
            attributes: ['id','name'],
            where: {rid: rid}
          }).then(dishgroups => {
            res.json({ dishgroups: dishgroups});
          });        
        }
      }
      else {
        models['dishgroup'].findAll({
          attributes: ['id','name']
        }).then(dishgroups => {
          res.json({ dishgroups: dishgroups});
        });
      }
    },

    /*
      * Delete a dishgroup with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a dishgroup with the given id
      */
    update(id, dishgroup) {
      return 1;
    }       
  }
};    