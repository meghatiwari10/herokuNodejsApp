var conn = require('./config');
var express = require('express');
var path    = require("path");
var app     = express();
var pg = require('pg');


var connectionString = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres";

module.exports = {
	user : function(req, res) {
			const results = [];
		
			pg.connect(connectionString, (err, client, done) => {
		
		    
			    console.log("username (addUser.js):",req.body.username);
			    // SQL Query > Insert Data
			    client.query('insert into users (name,speciality,zip,playlist) values($1,$2,$3,$4)',
			    [req.body.username, req.body.speciality, req.body.zip, req.body.playlist]);
			    
			    // SQL Query > Select Data
			    const query = client.query('SELECT * FROM users');
			    
			    // Stream results back one row at a time
			    query.on('row', (row) => {
			      results.push(row);
			    });


			    // After all data is returned, close connection and return results
			    query.on('end', () => {
			    	console.log("results: ",results);  
			      res.end(JSON.stringify(results.rows, null, " ") + "\n");

			      done();
			    });
			});
	}
};


// 	var pg = require('pg');  
      
//         //You can run command "heroku config" to see what is Database URL from Heroku belt
      
//         
//         var client = new pg.Client(conString);

//         client.connect();
// 	var query = client.query("insert into users (name,speciality,zip,playlist) "+ 
//                                 "values ('"+req.query.username+"','"+req.query.speciality+"','"+
//                                     req.query.zip+"','"+req.query.playlist+"')");	

// 	query.on("end", function (result) {          
//             // res.write('Success');
//             console.log("success!!!!!!!!!!!!!!");
            
//             client.end(); 
//             res.end("success");  
//         });
// 	}
// };
