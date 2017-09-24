// Include our "db"
var db = require('../repository/customer')();

// Exports all the functions to perform on the db
module.exports = {
  getCustomerAll,
  getCustomerRestaurants,
  getCustomerRestaurant,
  getCustomerOrders, 
  getCustomerOrder, 
  getCustomerReceipts,
  getCustomerReceipt,
  saveCustomer, 
  getCustomerOne, 
  updateCustomer, 
  delCustomer
};

//GET /customer operationId
function getCustomerAll(req, res, next) {
  db.find(0, res);
}

//GET /customer/{id} operationId
function getCustomerOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    db.find(id, res);
}

//GET /customer/{cid}/restaurants operationId
function getCustomerRestaurants(req, res, next) {
    var cid = req.swagger.params.cid.value;
    var id = 0;
    db.findrestaurant(cid, id, res);
}

//GET /customer/{cid}/restaurants/{id} operationId
function getCustomerRestaurant(req, res, next) {
    var cid = req.swagger.params.cid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.findrestaurant(cid, id, res);
}

//GET /customer/{cid}/orders operationId
function getCustomerOrders(req, res, next) {
    var cid = req.swagger.params.cid.value;
    var id = 0;
    db.findorder(cid, id, res);
}

//GET /customer/{cid}/orders/{id} operationId
function getCustomerOrder(req, res, next) {
    var cid = req.swagger.params.cid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.findorder(cid, id, res);
}

//GET /customer/{cid}/receipts operationId
function getCustomerReceipts(req, res, next) {
    var cid = req.swagger.params.cid.value;
    var id = 0;
    db.findreceipt(cid, id, res);
}

//GET /customer/{cid}/receipts/{id} operationId
function getCustomerReceipt(req, res, next) {
    var cid = req.swagger.params.cid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.findreceipt(cid, id, res);
}

//POST /customer operationId
function saveCustomer(req, res, next) {
    res.json({success: db.save(req.body), description: "Customer added to the list!"});
}

//PUT /customer/{id} operationId
function updateCustomer(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var customer = req.body;
    if(db.update(id, customer)){
        res.json({success: 1, description: "Customer updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /customer/{id} operationId
function delCustomer(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Customer deleted!"});
    }else{
        res.status(204).send();
    }

}