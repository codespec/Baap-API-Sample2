// Include our "db"
var db = require('../repository/user')();
// Exports all the functions to perform on the db
module.exports = {
  getUserAll,
  saveUser, 
  getUserOne, 
  updateUser, 
  delUser
};

//GET /user operationId
function getUserAll(req, res, next) {
  db.find(0, res);
}

//GET /user/{id} operationId
function getUserOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    db.find(id, res);
}

//POST /user operationId
function saveUser(req, res, next) {
    res.json({success: db.save(req.body), description: "User added to the list!"});
}

//PUT /user/{id} operationId
function updateUser(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var user = req.body;
    if(db.update(id, user)){
        res.json({success: 1, description: "User updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /user/{id} operationId
function delUser(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "User deleted!"});
    }else{
        res.status(204).send();
    }

}