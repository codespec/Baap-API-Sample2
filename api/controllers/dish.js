// Include our "db"
var db = require('../repository/dish')();
// Exports all the functions to perform on the db
module.exports = {
  getDishAll, 
  saveDish, 
  getDishOne, 
  updateDish, 
  delDish
};

//GET /dish operationId
function getDishAll(req, res, next) {
  db.find(0, res);
}
//POST /dish operationId
function saveDish(req, res, next) {
    res.json({success: db.save(req.body), description: "Dish added to the list!"});
}
//GET /dish/{id} operationId
function getDishOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    db.find(id, res);
}
//PUT /dish/{id} operationId
function updateDish(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var dish = req.body;
    if(db.update(id, dish)){
        res.json({success: 1, description: "Dish updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /dish/{id} operationId
function delDish(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Dish deleted!"});
    }else{
        res.status(204).send();
    }

}