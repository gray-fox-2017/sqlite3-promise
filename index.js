const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');


function create(data, callback){
  let query = 'INSERT INTO teacher '
  if(data.hasOwnProperty('id') && data.hasOwnProperty('name')){
    query += `(id, name) VALUES ('${data.id}', '${data.name}')`
  } else if(data.hasOwnProperty('id') && data.hasOwnProperty('subject')){
    query += `(id, subject) VALUES ('${data.id}', '${data.subject}')`
  } else if (data.hasOwnProperty('id') && data.hasOwnProperty('subject') && data.hasOwnProperty('name')){
    query += `(id, name, subject) VALUES ('${data.id}', '${data.name}', '${data.subject}')`
  }

  db.serialize(function(){
    db.run(query, function(err){
      if (!err) return callback(err);
      else return callback(err);
    })
  })
}

function read(callback){
  let query = 'SELECT * FROM teacher'

  db.serialize(function(){
    db.all(query, function(err, rows){
      if (!err) return callback(err,rows);
      else return callback(err,rows);
    })
  })
}

function update(id, data, callback){
  let query = 'UPDATE teacher SET '
  if(data.hasOwnProperty('name')){
    query += `name = '${data.name}' where id = '${id}'`
  } else if(data.hasOwnProperty('subject')){
    query += `subject = '${data.subject}' where id = '${id}'`
  } else {
    return console.log('please insert true instruction');
  }

  db.serialize(function (){
    db.run(query, function(err){
      if (!err) return callback(err);
      else return callback(err);
    })
  })
}

function deletes(id, callback){
  let query = `DELETE FROM teacher WHERE id=${id}`

  db.serialize(function (){
    db.run(query, function(err, rows){
      if (!err) return callback(err);
      else return callback(err);
    })
  })
}





module.exports = {
  create, read, update, deletes
};
