"use strict"

const repl = require('repl');
const sqlite = require('sqlite3').verbose();

let file = 'data.db';
let db = new sqlite.Database(file);

let CREATE_TABLE = "CREATE TABLE IF NOT EXISTS teacher (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50), subject VARCHAR(50))";
let SEED_DATA = `INSERT INTO teacher (name,subject) VALUES('poppy','tidur'),('Jenny','makan'),('Seone','bohong')`;
// write your code here
let createTable = () => {
  //RUN SQL one at a time
  db.serialize(function(){
    db.run(CREATE_TABLE, function(err){
      if(err) {
        console.log(err);
      } else {
        console.log('CREATE_TABLE');
      }
    })
  });
}

let seedData = () => {
  //RUN SQL one at a time
  db.serialize(function(){
    db.run(SEED_DATA, function(err){
      if(err) {
        console.log(err);
      } else {
        console.log('SEED_DATA');
      }
    })
  });
}

module.exports = {createTable,seedData};