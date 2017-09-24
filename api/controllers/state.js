// Include our "db"
var db = require('../repository/state')();
// Exports all the functions to perform on the db
module.exports = {
  getStateAll
};

//GET /states operationId
function getStateAll(req, res, next) {
  db.find(0, res);
}