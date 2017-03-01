var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {

	if(req.method === "POST") {
		req.on("data",function(chunk))
	}
	res.writeHead(200, {
		"Content-Type": "text/html"
	});

	fs.createReadStream("index.html","UTF-8");

}).listen(3000);

console.log("form server on");	