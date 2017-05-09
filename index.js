
const sqlite = require('sqlite3').verbose();
let file = 'data.db';
let db = new sqlite.Database(file);


function create(data){
   return new Promise(function(resolve, reject) {
    let create = `INSERT INTO teacher(id,name,subject) VALUES(${data.id},'${data.name}','${data.subject}')`;
    db.serialize(function(){
      db.run(create, function(err){
        if (!err) {
          return resolve(data);
        }else {
          return reject(err);
        }
      });
    });
  });
}

function read(){
  return new Promise(function(resolve, reject) {
    let read = `SELECT * FROM teacher`;
    db.serialize(function(){
      db.all(read, function(err, rows){
        if (!err) {
          return resolve(rows);
        }else {
          return reject(err);
        }
      });
    });
  });
}

function update(data){
  return new Promise(function(resolve, reject) {
      let update = `UPDATE teacher set name = '${data.name}', subject = '${data.subject}'
                    WHERE teacher.id = '${data.id}'`;
       db.serialize(function(){
         db.run(update,function(err){
           if (!err) {
             return resolve(update);
           }else {
             return reject(err);
           }
         });
       });
  });
}

function deletes(data){
    return new Promise(function(resolve, reject) {
    let deleteData = `DELETE FROM teacher WHERE teacher.id = ${data.id}`;
    db.serialize(function(){
      db.run(deleteData,function(err){
        if (!err) {
          return resolve(deleteData);
        }else {
          return reject(err);
        }
      });
    });
  });
}

module.exports = {
  create, read, update, deletes
};
