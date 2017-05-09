'use strict'

const repl = require('repl');
let replserver = repl.start({
  prompt: '\(\~\'\,\'\)\~  ',
  input: process.stdin,
  output: process.stdout
})
const sqlite = require('sqlite3').verbose();
const file = 'data.db';
const db = new sqlite.Database(file);



function create(data, callback = createCB){
  let id = data[0];
  let name = data[1];
  let subject = data[2];
  let query = `INSERT INTO teacher ('id', 'name', 'subject') VALUES ('${id}', '${name}', '${subject}')`;
  db.serialize(function () {
    db.run(query, callback);
  })
}

function read(callback = readCB){
  let query = `SELECT * FROM teacher`;
  db.serialize(function () {
    db.all(query, callback);
  })
}

function update(data, callback = updateCB){
  let id = data[0];
  let kategori = data[1];
  let databaru = data[2];
  let query = `UPDATE teacher SET ${kategori} = '${databaru}' WHERE id = '${id}'`;
  db.serialize(function() {
    db.run(query,callback)
  })
}

function deletes(id, callback = deleteCB){
  let query = `DELETE FROM teacher WHERE id = ${id}`
  db.serialize(function() {
    db.run(query, callback);
  })
}

let readCB = ((err, row) => {
  if (!err) {
    console.log('\n')
    console.log(row);
  } else {
    console.log(err);
  }
})

let createCB = (err => {
  if (!err) {
    console.log('\nCreate Berhasil');
    console.log(`\n${read()}`);
  } else {
    console.log(err)
  }
})

let updateCB = (err => {
  if (!err) {
    console.log('\n' + 'update berhasil')
    console.log(read())
  } else {
    console.log(err);
  }
})

let deleteCB = (err => {
  if (!err) {
    console.log(`\nHapus berhasil`)
    console.log(read())
  } else {
    console.log('Error!!')
  }
})
module.exports = {
  create, read, update, deletes
};
replserver.context.lihat = read;
replserver.context.add = create;
replserver.context.update = update;
replserver.context.hapus = deletes;