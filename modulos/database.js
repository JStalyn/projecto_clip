// create postgresql connection
var pg = require('pg'); 
var conString = "postgres://postgres:postgres@localhost:5432/postgres";
var client = new pg.Client(conString);
client.connect();
