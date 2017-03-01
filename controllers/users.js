var allUsers = require('../models/displayAll.js');
var createUser = require('../models/addUser.js');

exports.displayAll = function (req, res) {
	
	var users = allUsers.display(req,res);
  res.json(users);
};

exports.addUser = function (req, res) {
	debugger
	var response = createUser.user(req,res);
  res.json(response);
};