var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {
    restaurantList : [],
    
    /*
      * Save the restaurant inside the "db".
      */
    save(restaurant) {
      //restaurant.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a restaurant with a given id or return all the restaurants 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models['restaurant'].findOne({
          attributes: ['id','userid','name','phone','email','note'],
          where: {id: id}
        }).then(restaurant => {
          res.json(restaurant);
        });        
      }
      else {
        models['restaurant'].findAll({
          attributes: ['id','userid','name']
        }).then(restaurants => {
          res.json({ restaurants: restaurants});
        });
      }
    },

    findcustomer(rid, id,res) {
      if(id > 0) {
        models['restaurant'].findOne({
          include: {
            model: models['customer'], 
            where: {id: id}
          },          
          where: {id: rid}
        }).then(customer => {
          res.json(customer);
        });        
      }
      else {
        models['restaurant'].findAll({
          include: {
            model: models['customer']
          },          
          where: {id: rid}
        }).then(customers => {
          res.json({customers});
        });
      }
    },    

    findwait(rid, id,res) {
      if(id > 0) {
        models['waiting'].findOne({
          where: {rid: rid, id: id}
        }).then(wait => {
          res.json(wait);
        });        
      }
      else {
        models['waiting'].findAll({
          where: {rid: rid}
        }).then(waits => {
          res.json({ waits: waits });
        });
      }
    },

    finddinetable(rid, id,res) {
      if(id > 0) {
        models['dtable'].findOne({
          where: {rid: rid, id: id}
        }).then(dinetable => {
          res.json(dinetable);
        });        
      }
      else {
        models['dtable'].findAll({
          where: {rid: rid}
        }).then(dinetables => {
          res.json({ dinetables: dinetables });
        });
      }
    },

    finddishgroup(rid, id,res) {
      if(id > 0) {
        models['dishgroup'].findOne({
          where: {rid: rid, id: id}
        }).then(dishgroup => {
          res.json(dishgroup);
        });        
      }
      else {
        models['dishgroup'].findAll({
          where: {rid: rid}
        }).then(dishgroups => {
          res.json({ dishgroups: dishgroups});
        });
      }
    },

    finddish(rid, id,res) {
      if(id > 0) {
        models['dish'].findOne({
          include: {
            model: models['dishpicture'], attributes: ['filename']
          },          
          where: {rid: rid, id: id}
        }).then(dish => {
          res.json(dish);
        });        
      }
      else {
        models['dish'].findAll({
          include: {
            model: models['dishpicture'], attributes: ['filename']
          },              
          where: {rid: rid}
        }).then(dishes => {
          res.json({ dishes: dishes});
        });
      }
    },

    findorder(rid, id,res) {
      if(id > 0) {
        models['order'].findAll({
          include: [{
              model: models['orderitem'], 
              include: [{model: models['dish']}]
            }],    
          where: {rid: rid, id: id}
        }).then(order => {
          res.json(order);
        });        
      }
      else {
        models['order'].findAll({
          where: {rid: rid}
        }).then(orders => {
          res.json({ orders: orders});
        });
      }
    },

    findreceipt(rid, id,res) {
      if(id > 0) {
        models['receipt'].findAll({
          include: [{
            model: models['order'],
            include: [{
              model: models['orderitem'], 
              include: [{
                model: models['dish']
              }],
            }],
          }],      
          where: {rid: rid, id: id}
        }).then(receipt => {
          res.json(receipt);
        });        
      }
      else {
        models['receipt'].findAll({
          where: {rid: rid}
        }).then(receipts => {
          res.json({ receipts: receipts});
        });
      }
    }, 

    /*
      * Delete a restaurant with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a restaurant with the given id
      */
    update(id, restaurant) {
      return 1;
    }       
  }
};    