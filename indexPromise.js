const sqlite3 = require('sqlite3').verbose();

let file = 'data.db'
let db = new sqlite3.Database(file);

function create(data, callback){
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}')`
    db.run(query, callback)
  })
}

function createTest() {
  create()
  .then((row) => {
    console.log(row);
  })
  .catch((err) => {
    console.log(err);
  })
}


function read(callback){
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM teacher"
    db.run(query, callback)
  })
}

function createTest() {
  read()
  .then((row) => {
    console.log(row);
  })
  .catch((err) => {
    console.log(err);
  })
}


function update(callback){
  return new Promise((resolve, reject) => {
    let query = `UPDATE teacher SET id = 1, name = "", subject = ""`
    db.run(query, callback)
  })
}

function createTest() {
  update()
  .then((row) => {
    console.log(row);
  })
  .catch((err) => {
    console.log(err);
  })
}

function deletes(id, callback){
  return new Promise((resolve, reject) => {
    let query = `DELETE FROM teacher WHERE id = ${id}`
    db.run(query, callback)
  })
}

function createTest() {
  deletes()
  .then((row) => {
    console.log(row);
  })
  .catch((err) => {
    console.log(err);
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
