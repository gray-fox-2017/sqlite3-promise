const sqlite = require ('sqlite3').verbose();
const db = new sqlite.Database('data.db');

function create(data){
  let query = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}');`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function(err) {
        if (!err) resolve ();
        else reject(err);
      });
    });
  });
}

function read(){
  let query = `SELECT * FROM teacher;`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.all(query, function(err) {
        if (!err) resolve();
        else reject(err);
      });
    });
  });
}

function update(id){
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${id};`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function (err) {
        if (!err) resolve();
        else reject(err);
      });
    });
  });
}

function deletes(id){
  let query = `DELETE FROM teacher WHERE id = ${id};`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function (err) {
        if (!err) resolve();
        else reject(err);
      });
    });
  });
}

// SORRY, I CAN'T PROMISE YOU //
  /*
function create(data, callback){
  let query = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}');`;
  db.serialize(function() {
    db.run(query, function(err) {
      if (!err) callback ('Success');
      else callback(err);
    });
  });
}

function read(callback){
  let query = `SELECT * FROM teacher;`;
  db.serialize(function() {
    db.all(query, (err, rows) => {
      if (!err) console.log(rows);
    });
  });
}

function update(id,callback){
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${id};`;
  db.serialize(function() {
    db.run(query, function (err) {
      if (!err) callback ('${id} is updated');
      else callback(err);
    });
  });
}

function deletes(id, callback){
  let query = `DELETE FROM teacher WHERE id = ${id};`;
  db.serialize(function() {
    db.run(query, function (err) {
      if (!err) callback ('${id} is deleted');
    });
  });
}

function callback(result) {
  console.log (result);
}

*/
module.exports = {
  create, read, update, deletes
};
