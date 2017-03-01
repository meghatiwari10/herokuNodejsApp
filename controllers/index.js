exports.index = function (req, res) {
	var path = require('path');
	res.sendFile(path.resolve('index.html'));
  
}