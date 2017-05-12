'use strict'

const repl = require('repl');
let replserver = repl.start({
  prompt: '\(\~\'v\'\)\~  ',
  input: process.stdin,
  output: process.stdout
})
const sqlite = require('sqlite3').verbose();
const file = 'data.db';
const db = new sqlite.Database(file);
// function create(data, callback = createCB){
//   let id = data[0];
//   let name = data[1];
//   let subject = data[2];
//   let query = `INSERT INTO teacher ('id', 'name', 'subject') VALUES ('${id}', '${name}', '${subject}')`;
//   db.serialize(function () {
//     db.run(query, callback);
//   })
// }

//PROMISE CREATE
function create(data){
  let id = data[0];
  let name = data[1];
  let subject = data[2];
  let query = `INSERT INTO teacher ('id', 'name', 'subject') VALUES ('${id}', '${name}', '${subject}')`;
  return new Promise(function (resolve, reject) {
    db.serialize(function () {
      db.run(query, function(err) {
        if (err) reject(err)
        else resolve()
      });
    });
  });
}

function tambahData(data) {
  create(data)
  .then( () => {
    console.log('INSERT berhasil!!')
    showData();
  })
  .catch( err => console.log(err));
}

// function read(callback = readCB){
//   let query = `SELECT * FROM teacher`;
//   db.serialize(function () {
//     db.all(query, callback);
//   })
// }

//PROMISE READ
function read(){
  let query = `SELECT * FROM teacher`;
  return new Promise(function (resolve, reject) {
    db.serialize(function () {
      db.all(query, function(err, row) {
        if (err) reject(err)
        else resolve(row)
      });
    });
  });
}
function showData() {
  read()
  .then(row => console.log(row))
  .catch(err => console.log(err));
}
// function update(data, callback = updateCB){
//   let id = data[0];
//   let kategori = data[1];
//   let databaru = data[2];
//   let query = `UPDATE teacher SET ${kategori} = '${databaru}' WHERE id = '${id}'`;
//   db.serialize(function() {
//     db.run(query,callback)
//   })
// }

//PROMISE UPDATE
function update(data){
  let id = data[0];
  let kategori = data[1];
  let databaru = data[2];
  let query = `UPDATE teacher SET ${kategori} = '${databaru}' WHERE id = '${id}'`;
  return new Promise(function (resolve, reject) {
    db.serialize(function() {
      db.run(query, function(err) {
        if (!err) resolve()
        else reject(err);
      });
    });
  });
}

function perbaharui(data) {
  update(data)
  .then(() => {
    console.log('Update Berhasil')
    showData()
  })
  .catch(err => console.log(err));
}

// function deletes(id, callback = deleteCB){
//   let query = `DELETE FROM teacher WHERE id = ${id}`
//   db.serialize(function() {
//     db.run(query, callback);
//   })
// }

//PROMISE DELETES
function deletes(id){
  let query = `DELETE FROM teacher WHERE id = ${id}`
  return new Promise(function (resolve, reject) {
    db.serialize(function() {
      db.run(query, function(err) {
        if (!err) resolve()
        else reject(err);
      });
    });
  });
}

function hapus(id) {
  deletes(id)
  .then(() => {
    console.log('Hapus berhasil!!')
    showData();
  }).catch(err => console.log(err));
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
    showData()
  } else {
    console.log(err);
  }
})

let deleteCB = (err => {
  if (!err) {
    console.log(`\nHapus berhasil`)
    console.log(showData())
  } else {
    console.log('Error!!')
  }
})
module.exports = {
  create, read, update, deletes
};
replserver.context.lihat = showData;
replserver.context.add = tambahData;
replserver.context.update = perbaharui;
replserver.context.hapus = hapus;