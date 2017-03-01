var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/megha";

var client = new pg.Client(conString);
pg.connect(conString, function (err, client, done) {  
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  else console.log("connected");
})
client.connect();