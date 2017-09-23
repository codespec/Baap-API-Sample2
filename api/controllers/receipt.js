// Include our "db"
var db = require('../repository/receipt')();
// Exports all the functions to perform on the db
module.exports = {
  getReceiptAll, 
  saveReceipt, 
  getReceiptOne, 
  updateReceipt, 
  delReceipt
};

//GET /receipt operationId
function getReceiptAll(req, res, next) {
  db.find(0, res);
}
//POST /receipt operationId
function saveReceipt(req, res, next) {
    res.json({success: db.save(req.body), description: "Receipt added to the list!"});
}
//GET /receipt/{id} operationId
function getReceiptOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    db.find(id, res);
}
//PUT /receipt/{id} operationId
function updateReceipt(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var dish = req.body;
    if(db.update(id, dish)){
        res.json({success: 1, description: "Receipt updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /receipt/{id} operationId
function delReceipt(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Receipt deleted!"});
    }else{
        res.status(204).send();
    }

}