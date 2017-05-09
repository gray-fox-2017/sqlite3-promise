const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');


function create(data){
  let query = 'INSERT INTO teacher '
  if(data.hasOwnProperty('id') && data.hasOwnProperty('name')){
    query += `(id, name) VALUES ('${data.id}', '${data.name}')`
  } else if(data.hasOwnProperty('id') && data.hasOwnProperty('subject')){
    query += `(id, subject) VALUES ('${data.id}', '${data.subject}')`
  } else if (data.hasOwnProperty('id') && data.hasOwnProperty('subject') && data.hasOwnProperty('name')){
    query += `(id, name, subject) VALUES ('${data.id}', '${data.name}', '${data.subject}')`
  }

  return new Promise((resolve, reject) => {
    db.serialize(function(){
      db.run(query, (err) => {
        if(!err) return resolve();
        else return reject();
      })
    })
  })
}

function read(){
  let query = 'SELECT * FROM teacher'

  return new Promise((resolve, reject) => {
    db.serialize(function(){
      db.all(query, (err, rows) => {
        if(!err) return resolve(rows);
        else return reject(err);
      })
    })
  })
}

function update(id, data){
  let query = 'UPDATE teacher SET '
  if(data.hasOwnProperty('name')){
    query += `name = '${data.name}' where id = '${id}'`
  } else if(data.hasOwnProperty('subject')){
    query += `subject = '${data.subject}' where id = '${id}'`
  } else {
    return console.log('please insert true instruction');
  }

  return new Promise((resolve, reject) => {
    db.serialize(function(){
      db.run(query, (err) => {
        if(!err) return resolve();
        else return reject();
      })
    })
  })
}

function deletes(id){
  let query = `DELETE FROM teacher WHERE id=${id}`

  return new Promise((resolve, reject) => {
    db.serialize(function(){
      db.run(query, (err) => {
        if(!err) return resolve();
        else return reject();
      })
    })
  })
}





module.exports = {
  create, read, update, deletes
};
