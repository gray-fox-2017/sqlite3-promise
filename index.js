
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

function test_create(){
  create({'id':1,'name':'ade','subject':'algoritma'})
  .then((data) => {
    console.log(`create is done!`);
  })
  .catch((err) => {
    console.log(err);
  })
}

function test_read(){
  read()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
}

function test_update(){
  update({'id':0,'name':'tirta','subject':'javascript'})
  .then((data) => {
    console.log('update sukses');
  })
  .catch((err) => {
    console.log(err);
  })
}

function test_delete(){
  deleteData({'id':1})
  .then((data) => {
    console.log('delete sukses');
  })
  .catch((err) => {
    console.log(err);
  })
}


// test_create();
test_read();
// test_update();
// test_delete();

module.exports = {
  create, read, update, deletes
};
