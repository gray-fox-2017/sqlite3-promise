const sqlite3 = require('sqlite3').verbose();

let file = 'data.db'
let db = new sqlite3.Database(file);

function create(data, callback){
  db.serialize(function() {
    let query = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}')`
    db.run(query, callback)
  })
}

function read(callback) {
  db.serialize(function() {
    let query = "SELECT * FROM teacher"
    db.all(query, callback)
  })
}

function update(callback) {
  db.serialize(function() {
    let query = `UPDATE teacher SET id = 1, name = "", subject = ""`
    db.run(query, callback)
  })
}

function deletes(id, callback){
  db.serialize(function() {
    let query = `DELETE FROM teacher WHERE id = ${id}`
    db.run(query, callback)
  })
}

let allCallback = (err, row) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(row);
  }
}

let runCallback = (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Successful!');
  }
}

// create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, runCallback)
// read(allCallback);
// deletes(1, runCallback);

module.exports = {
  create, read, update, deletes
};
