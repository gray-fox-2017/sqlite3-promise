const file = 'data.db'
const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database(file)

function create(data){
  return new Promise((resolve, reject) => {
    let insert = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}');`
    db.serialize(() => {
      db.run(insert, (err) => {
        if (!err){
          return resolve(data)
        } else {
          return reject(err)
        }
      })
    })
  })
}

function read(){
  return new Promise((resolve, reject) => {
    let select = `SELECT * FROM teacher;`
    db.serialize(() => {
      db.all(select, (err, rows) => {
        if (!err){
          return resolve(rows)
        } else {
          return reject(err)
        }
      })
    })
  })
}

function update(data){
  return new Promise ((resolve, reject) => {
    let update = `UPDATE teacher SET '${data.colomn}' = '${data.value}' WHERE id = ${data.id};`
    db.serialize(() => {
      db.run(update, (err) => {
        if (!err){
          return resolve(data)
        } else {
          return reject(err)
        }
      })
    })
  })
}

function deletes(data){
  return new Promise ((resolve, reject) => {
    let deletes = `DELETE FROM teacher WHERE id = ${data};`
    db.serialize(() => {
      db.run(deletes, (err) => {
        if (!err){
          return resolve(data)
        } else {
          return reject(err)
        }
      })
    })
  })
}

// function testCreate(){
//   create({'id': 3, 'name': 'samul', 'subject':'CPP'})
//   .then((data) => {
//     console.log(`${JSON.stringify(data)} added!`)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
//
// function testRead() {
//   read()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
//
// function testUpdate() {
//   update({'colomn': 'name', 'value':'januar', 'id':0})
//   .then((data) => {
//     console.log(`${JSON.stringify(data.id)} is updated!`)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
//
// function testDelete() {
//   deletes(3)
//   .then((data) => {
//     console.log(`deleted`)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
//
// testCreate();
// testRead();
// testUpdate();
// testDelete();
module.exports = {
  create, read, update, deletes
};
