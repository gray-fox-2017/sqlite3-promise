const sqlite = require('sqlite3').verbose();

var file = 'data.db';
var db = new sqlite.Database(file);

function callback(result) {
  console.log(result);
}

function create(data, callback){
  let query = `INSERT INTO teacher(id, name, subject) VALUES(${data.id}, '${data.name}', '${data.subject}');`;
  db.serialize(function() {
    db.run(query, function(err) {
      if(!err) callback('Success');
      else callback(err);
    })
  });
}

function read(callback){
  let query = `SELECT * FROM teacher;`;
  db.all(query, (err, rows) => {
    if(!err) callback(rows);
  })
}

function update(id, data, callback){
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${id};`;
  db.serialize(function() {
    db.run(query, function(err) {
      if(!err) callback(`Data ${id} updated`);
      else callback(err);
    })
  });
}

function updateWithPromise(id, data) {
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${id};`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function(err) {
        if(!err) {
          return resolve(done);
        } else {
          return reject(err);
        }
      })
    })
  })
}

function deletes(id, callback){
  let query = `DELETE FROM teacher WHERE id = ${id};`;
  db.serialize(function() {
    db.run(query, function(err) {
      if(!err) callback(`Data ${id} deleted`);
      else callback(err);
    })
  });
}

// create({id: 3, name: 'Joko', subject:'Penjaskes'}, ())
// read(callback)
// deletes(2, callback)
// update(1, {name: 'Widodos', subject: 'Kewarganegaraan'}, callback)
module.exports = {
  create, read, update, deletes
};
