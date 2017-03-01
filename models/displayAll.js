require('./config');
var express = require('express');
var path    = require("path");
var app     = express();
var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres";

module.exports = {
  display: function(req,res) {    
        //const results = [];
        let results;
        
        var client = new pg.Client(conString);

        client.connect();

        var query = client.query('SELECT * FROM users');
        

        query.on("row", function (row, result) { 
            result.addRow(row); 
        });

        query.on("end", function (result) {          
            
            console.log(result.rows);
            //res.writeHead(200, {'Content-Type': 'text/plain'});
            res.send(result.rows);
            res.end();  
            //results = result;

            client.end();
        });
        return results;
        // pg.connect(connectionString, (err, client, done) => {
        //     // SQL Query > Select Data
        //     const query = client.query('SELECT * FROM users');
        //     //console.log(query);
        //     // Stream results back one row at a time
        //     query.on('row', (row, result) => {
        //       result.addRow(row);
        //     });


        //     // After all data is returned, close connection and return results
        //     query.on('end', (result) => {
        //         // res.setHeader('Content-Type', 'application/json');
        //         // res.send(JSON.stringify(results));

        //         // var ans = JSON.stringify(results.rows, null, " ") + "\n";
        //         console.log("results: ",result);  
        //       //res.end(JSON.stringify(results.rows, null, " ") + "\n");
        //         res.send(result);
        //       done();
        //     });
        // });
  }
};
