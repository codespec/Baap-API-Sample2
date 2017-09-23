'use strict';
// Include our "db"
var db = require('../repository/restaurant')();
// Exports all the functions to perform on the db
module.exports = {
  getRestaurantAll,
  getRestaurantCustomer,
  getRestaurantWaits,
  getRestaurantDineTable,
  getRestaurantDishgroup,
  getRestaurantDish,
  getRestaurantOrder,
  getRestaurantReceipt,
  saveRestaurant, 
  getRestaurantOne, 
  updateRestaurant, 
  delRestaurant
};

//GET /restaurant operationId
function getRestaurantAll(req, res, next) {
  db.find(0, res);
}

//GET /restaurant/{rid}/customers/{id} operationId
function getRestaurantCustomer(req, res, next) {
    var rid = req.swagger.params.rid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.findcustomer(rid, id, res);
}

//GET /restaurant/{rid}/waits/{id} operationId
function getRestaurantWaits(req, res, next) {
    var rid = req.swagger.params.rid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.findwait(rid, id, res);
}

//GET /restaurant/{rid}/dinetables/{id} operationId
function getRestaurantDineTable(req, res, next) {
    var rid = req.swagger.params.rid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.finddinetable(rid, id, res);
}

//GET /restaurant/{rid}/dishgroups/{id} operationId
function getRestaurantDishgroup(req, res, next) {
    var rid = req.swagger.params.rid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.finddishgroup(rid, id, res);
}

//GET /restaurant/{rid}/dishes/{id} operationId
function getRestaurantDish(req, res, next) {
    var rid = req.swagger.params.rid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.finddish(rid, id, res);
}

//GET /restaurant/{rid}/orders/{id} operationId
function getRestaurantOrder(req, res, next) {
    var rid = req.swagger.params.rid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.findorder(rid, id, res);
}

//GET /restaurant/{rid}/receipts/{id} operationId
function getRestaurantReceipt(req, res, next) {
    var rid = req.swagger.params.rid.value;
    var id = 0;
    if(req.swagger.params.id !== undefined)
        id = req.swagger.params.id.value;
    db.findreceipt(rid, id, res);
}

//POST /restaurant operationId
function saveRestaurant(req, res, next) {
    res.json({success: db.save(req.body), description: "Restaurant added to the list!"});
}

//GET /restaurant/{id} operationId
function getRestaurantOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    db.find(id, res);
}

//PUT /restaurant/{id} operationId
function updateRestaurant(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = req.body;
    if(db.update(id, movie)){
        res.json({success: 1, description: "Restaurant updated!"});
    }else{
        res.status(204).send();
    }

}

//DELETE /restaurant/{id} operationId
function delRestaurant(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Restaurant deleted!"});
    }else{
        res.status(204).send();
    }

}