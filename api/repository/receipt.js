var models  = require('../models');
var crypto = require('crypto');

module.exports = function() {
  return {
    receiptList : [],
    
    /*
      * Save the user inside the "db".
      */
    save(receipt) {
      //receipt.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a receipt with a given id or return all the customers 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models['receipt'].findOne({
          where: {id: id}
        }).then(receipt => {
          res.json(receipt);
        });        
      }
      else {
        models['receipt'].findAll({
        }).then(receipts => {
          res.json({ receipts: receipts});
        });
      }
    },   

    /*
      * Delete a receipt with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a receipt with the given id
      */
    update(id, receipt) {
      return 1;
    }       
  }
};