var models  = require('../models');
var crypto = require('crypto');


module.exports = function() {
  return {
    customerList : [],
    
    /*
      * Save the restaurant inside the "db".
      */
    save(customer) {
      //customer.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a customer with a given id or return all the customers 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models['customer'].findOne({
          attributes: ['id','userid','name','phone','email','note'],
          where: {id: id}
        }).then(customer => {
          res.json(customer);
        });        
      }
      else {
        models['customer'].findAll({
          attributes: ['id','userid','name']
        }).then(customers => {
          res.json({ customers: customers});
        });
      }
    },

    findrestaurant(cid, id,res) {
      if(id > 0) {
        models['customer'].findOne({
          include: {
            model: models['restaurant'], 
            where: {id: id}
          },          
          where: {id: cid}
        }).then(restaurant => {
          res.json(restaurant);
        });        
      }
      else {
        models['customer'].findAll({
          include: {
            model: models['restaurant']
          },          
          where: {id: cid}
        }).then(restaurants => {
          res.json({restaurants});
        });
      }
    },    

    findorder(cid, id,res) {
      if(id > 0) {
        models['order'].findAll({
          include: [{
              model: models['orderitem'], 
              include: [{model: models['dish']}]
            }],    
          where: {cid: cid, id: id}
        }).then(order => {
          res.json(order);
        });        
      }
      else {
        models['order'].findAll({
          where: {cid: cid}
        }).then(orders => {
          res.json({ orders: orders});
        });
      }
    }, 

    findreceipt(cid, id,res) {
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
          where: {cid: cid, id: id}
        }).then(receipt => {
          res.json(receipt);
        });        
      }
      else {
        models['receipt'].findAll({
          where: {cid: cid}
        }).then(receipts => {
          res.json({ receipts: receipts});
        });
      }
    },    

    /*
      * Delete a customer with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a customer with the given id
      */
    update(id, customer) {
      return 1;
    }       
  }
};    