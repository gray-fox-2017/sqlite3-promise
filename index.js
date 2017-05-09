
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');



function create(data){
  return new Promise ( (resolve,reject) => {
    db.serialize( function (){
      let create = `INSERT INTO teacher (id,name,subject) VALUES (${data.id},'${data.name}','${data.subject}')`;
        db.run(create, function(err){
          if(err){
            return reject(err);
          } else {
            return resolve(data);
          }
        })
      })
    })
  }


function read(){
    return new Promise ( (resolve,reject) => {
      db.serialize( function() {
        let read = `SELECT * FROM teacher`;
          db.all(read, function (err,data) {
            if (err) {
              return reject(err);
            }else {
              return resolve(data);
            }
          })
      })
    })
}

function update(id,name,subject){
  return new Promise ( (resolve,reject) => {
    db.serialize ( function () {
      let update = `UPDATE teacher SET name = '${name}', subject = '${subject}' WHERE id = '${id}'`
        db.run(update, function (err,data) {
          if(err){
            return reject(err);
          } else {
            return resolve(data);
          }
       })
     })
   })
}

function deletes(id){
  return new Promise ( (resolve,reject ) => {
     db.serialize ( function () {
       let del = `DELETE  FROM teacher WHERE id = ${id.id} `;
        db.run(del, function(err,data) {
          if(err) {
            return reject(err);
          } else {
            return resolve(data);
          }
        })
     })
  })
}


function tesCreate() {
  create({id:1, name:'jumadi', subject:'study'})
  .then((data) => {
    console.log("berhasil membuat data  baru");
  })
  .catch((err)=>{
    console.log(err);
  })
}

function tesRead() {
  read()
  .then( (data) => {
    console.log(data);
  })
  .catch( (err) => {
    console.log(err);
  })
}

function tesUpdate() {
  update({ id:2, name:'ade' , subject: 'swimming'})
  .then ( (data) => {
    console.log('Berhasil Update Data');
  })
  .catch
   ( (err) => {
     console.log(err);
   })
}

function tesDelete() {
  deletes({id:1})
  .then ( (data) => {
    console.log('Berhasil Hapus Data');
  })
  .catch
   ( (err) => {
     console.log(err);
   })
}




tesCreate();
tesRead();
tesUpdate();
tesDelete();

module.exports = {
  create,read,update,deletes
};
