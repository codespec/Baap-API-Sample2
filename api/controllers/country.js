// Include our "db"
var db = require('../repository/country')();
// Exports all the functions to perform on the db
module.exports = {
  getCountryAll
};

//GET /country operationId
function getCountryAll(req, res, next) {
  db.find(0, res);
}