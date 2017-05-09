
const repl = require('repl');
const sqlite = require('sqlite3').verbose();
const fs = require('fs')

let file = 'data.db'
let db = new sqlite.Database(file)

// function create(data, callback){}
// function read(callback){}
// function update(callback){}
// function deletes(callback){}
//coba bikin challenge ini di class dan pake static biaar tau gimana
//caranya
class LearnPromise {
  constructor() {

  }
   static create(data) {
    return new Promise((resolve, reject) => {
      db.serialize(function() {
        let query = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}')`
        db.run(query, (err, data) => {
          if(!err) {
            return resolve(data)
          } else {
            return reject(err)
          }
        })
      })
    })
  }
  static read() {
    return new Promise((resolve, reject) => {
      db.serialize(function() {
        let query = `SELECT * FROM teacher `
        db.all(query, (err, rows) => {
          if(!err) {
            return resolve(rows)
          } else {
            return reject(err)
          }
        })
      })
    })
  }
  static update(id, name, subject) {
    return new Promise((resolve, reject) => {
      db.serialize(function() {
        let query = `UPDATE teacher
                     SET name = '${name}', subject = '${subject}'
                     WHERE id = '${id}'`
        db.run(query, (err, data) => {
          if(!err) {
            return resolve(data)
          } else {
            return reject(err)
          }
        })
      })
    })
  }
  static delete(id) {
    return new Promise((resolve, reject) => {
      db.serialize(function() {
        let query = `DELETE FROM teacher WHERE id = ${id.id}`
        db.run(query, (err, data) => {
          if(!err) {
            return resolve(data)
          } else {
            return reject(err)
          }
        })
      })
    })
  }

  static test_create() {
    LearnPromise.create({id : 4, name : 'akbar' , subject : 'angularjs'})
    .then((data) => {
      console.log(data);
      //return data;
      console.log("success");
    })
    .catch((err) => {
      console.log(err);
    })
  }

  static test_read() {
    LearnPromise.read()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  static test_update() {
    LearnPromise.read({id : 3, name : 'erwin' , subject : 'javascript'})
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  static test_delete() {
    LearnPromise.delete({id : 0})
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

}

//LearnPromise.test_create();
//LearnPromise.test_read();
//LearnPromise.test_update();
//LearnPromise.test_delete();
module.exports = LearnPromise; //kalo 1 langsung
//kalo 2 fungsinya di simpen di object
// module.exports = {
//   create, read
// }
