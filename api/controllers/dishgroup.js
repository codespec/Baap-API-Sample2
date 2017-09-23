// Include our "db"
var db = require('../repository/dishgroup')();
// Exports all the functions to perform on the db
module.exports = {
  getDishgroupAll, 
  getDishgroupByRestaurant,
  saveDishgroup, 
  getDishgroupOne,
  updateDishgroup, 
  delDishgroup
};

//GET /dishgroup operationId
function getDishgroupAll(req, res, next) {
  db.find(0, res);
}

//GET /dishgroup/restaurant/{id} operationId
function getDishgroupByRestaurant(req, res, next) {
  var rid = req.swagger.params.rid.value;
  var id = req.swagger.params.id.value; //req.swagger contains the path parameters
  db.findbyrestaurant(rid, id, res);
}

//POST /dishgroup operationId
function saveDishgroup(req, res, next) {
    res.json({success: db.save(req.body), description: "Dishgroup added to the list!"});
}
//GET /dishgroup/{id} operationId
function getDishgroupOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    db.find(id, res);
}
//PUT /dishgroup/{id} operationId
function updateDishgroup(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = req.body;
    if(db.update(id, dishgroup)){
        res.json({success: 1, description: "Dishgroup updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /dishgroup/{id} operationId
function delDishgroup(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Dishgroup deleted!"});
    }else{
        res.status(204).send();
    }

}