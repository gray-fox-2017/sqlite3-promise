const file = 'data.db'
const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database(file)


function create(data){
  return new Promise((resolve, reject) =>{
    let CREATE = `INSERT INTO teacher (id, name,  subject) VALUES ('${data.id}', '${data.name}','${data.subject}')`
    db.serialize(()=>{
      db.run(CREATE, (err) =>{
        if(!err) {
          return resolve(data)
        } else {
          return reject (err)
        }
      })
    })
  })
}

function read(){
  return new new Promise((resolve, reject) => {
    let SELECT = `SELECT * FROM teacher`
    db.serialize(()=>{
      db.all(SELECT, (err,rows) =>{
        if(!err) {
          return resolve(rows)
        } else {
          return reject(err)
        }
      })
    })
  });
}

function update(data){
  return new Promise ((resolve, reject) =>{
    let UPDATE = `UPDATE teacher SET '${data.column}' = '${data.value}' WHERE id = ${data.id} `
    db.serialize(() =>{
      db.run(UPDATE, (err) =>{
        if(!err) {
          return resolve (data)
        } else {
          return reject (err)
        }
      })
    })
  })
}

function deletes(data){
  return new Promise((resolve, reject) =>{
    let DELETE = `DELETE FROM teacher WHERE id = ${data.id}`
    db.serialize(() =>{
      db.run(DELETE, (err) =>{
        if(!err) {
          return resolve(data)
        } else {
          return reject(err)
        }
      })
    })
  })
}

module.exports = {
  create, read, update, deletes
};
