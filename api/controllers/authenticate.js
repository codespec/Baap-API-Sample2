'use strict';
var util = require('util');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

module.exports = {
  token, authenticate, login
};

function token(req, res, next) {
  
    var user = {
      name: 'jake',
      password: '1234',
      admin: true
    };
  
    var token = jwt.sign(user, "secret", {
      expiresIn: 1440 // expires in 24 hours
    });
    res.json({ token: token });
  }

function login(req, res, next) {

  var user = {
    name: 'jake',
    password: '1234',
    admin: true
  };

  var token = jwt.sign(user, "secret", {
    expiresIn: 1440 // expires in 24 hours
  });
  res.json({ token: token });
}

function authenticate(req, res, next) {

  jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
    if (err) {
      return res.json({ success: false, message: 'Failed to authenticate token.' });		
    } else {
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;	
      next();
    }
  });
  
  res.json({success: '', description: "Movie added to the list!"});
}
