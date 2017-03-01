require('./config');
var express = require('express');
var path    = require("path");
var app     = express();
var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres";

module.exports = {
  search: function(req,res) {    
        //const results = [];
        let results;
        console.log("search: ",req.body.search);
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("SELECT * FROM users where name=($1)",[req.body.search]);
        

        query.on("row", function (row, result) { 
            result.addRow(row); 
        });

        query.on("end", function (result) {          
            
            console.log("found: ",result.rows);
            //res.writeHead(200, {'Content-Type': 'text/plain'});
            res.send(result.rows);
            res.end();  
            //results = result;

            client.end();
        });
       
  }
};
