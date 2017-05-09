const sqlite = require('sqlite3').verbose();

var file = 'data.db';
var db = new sqlite.Database(file);

function create(data) {
  let query = `INSERT INTO teacher(id, name, subject) VALUES(${data.id}, '${data.name}', '${data.subject}');`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function(err) {
        if(!err) {
          return resolve('Success');
        } else {
          return reject(err);
        }
      })
    })
  })
}

function read() {
  let query = `SELECT * FROM teacher;`;
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.all(query, (err, rows) => {
        if(!err) return resolve(rows);
        else return reject(err);
      })
    })
  })
}

function update(id, data) {
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${id};`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function(err) {
        if(!err) {
          return resolve('Success!');
        } else {
          return reject(err);
        }
      })
    })
  })
}

function deletes(id){
  let query = `DELETE FROM teacher WHERE id = ${id};`;
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function(err) {
        if(!err) return resolve('Success!');
        else return reject(err);
      })
    });
  })
}

module.exports = {
  create, read, update, deletes
};
