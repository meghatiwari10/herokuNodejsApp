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
            
            
            //res.writeHead(200, {'Content-Type': 'text/plain'});
            res.send(result.rows);
            res.end();  
            //results = result;

            client.end();
        });
        return results;
        
  }
};
