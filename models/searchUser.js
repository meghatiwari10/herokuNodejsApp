require('./config');
var express = require('express');
var path    = require("path");
var app     = express();
var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres";

module.exports = {
  search: function(req,res) {    

        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("SELECT * FROM users where name=('"+req.body.name+"')");
        

        query.on("row", function (row, result) { 
            result.addRow(row); 
        });

        query.on("end", function (result) {          
            
            console.log("found: ",result.rows);
            res.send(result.rows);
            res.end();  
            client.end();
        });
       
  }
};
