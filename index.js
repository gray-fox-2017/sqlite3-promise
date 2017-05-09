const sqlite = require('sqlite3').verbose();
let file = "data.db";
let db = new sqlite.Database(file);

function create(data){
  let QuerryCreate = `INSERT INTO teacher (id,name,subject) Values ('${data["id"]}','${data["name"]}','${data["subject"]}');`;
  return new Promise((resolve, reject) => {
    db.serialize(()=>{
      db.run(QuerryCreate,(err)=>{
          if(err){
            return reject(err);
          }
          else{
            return resolve('Input data Suskes');
          }
      })
    });
  });
}

function read(){
  let QueryAll = "Select * From teacher";
  return new Promise((resolve, reject) => {
  db.serialize(()=>{
    db.all(QueryAll,(err,row)=>{
      if(err){
        return reject(err);
      }
      else{
        return resolve(row);
      }
    });
  });
});
}

function update(data){
  let QueryUpdate = `UPDATE teacher SET name ='${data["name"]}', subject = '${data["subject"]}' WHERE id = '${data["id"]}'`
  return new Promise((resolve,reject) =>{
    db.serialize(()=>{
      db.run(QueryUpdate,(err) =>{
          if(err){
            return reject(err);
          }
          else{
            return resolve("Suskes untuk Update");
          }
      });
    });
  });
}

function deletes(id){
  let QueryDelete = `DELETE FROM teacher Where id = '${id}'`;
  return new Promise((resolve,reject) =>{
    db.serialize(()=>{
      db.run(QueryDelete,(err) =>{
          if(err){
            return reject(err);
          }
          else{
            return resolve("Suskes untuk Delete");
          }
      });
    });
  });

}


module.exports = {
  create, read, update, deletes
};
