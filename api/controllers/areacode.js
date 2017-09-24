// Include our "db"
var db = require('../repository/areacode')();
// Exports all the functions to perform on the db
module.exports = {
  getAreacodeAll
};

//GET /country operationId
function getAreacodeAll(req, res, next) {
  db.find(0, res);
}