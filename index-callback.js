const sqlite = require('sqlite3').verbose();
let file = "data.db";
let db = new sqlite.Database(file);

function create(data, callback){
  let QuerryCreate = `INSERT INTO teacher (id,name,subject) Values ('${data["id"]}','${data["name"]}','${data["subject"]}');`;
  db.serialize(() =>{
    db.run(QuerryCreate, callback)
  });
}

function read(callback){
  let QueryAll = "Select * From teacher";
  db.serialize(()=>{
    db.all(QueryAll, callback)
  });
}

function update(data,callback){
  let QueryUpdate = `UPDATE teacher SET name ='${data["name"]}', subject = '${data["subject"]}' WHERE id = '${data["id"]}'`
  db.serialize(()=>{
    db.run(QueryUpdate, callback)
  });
}

function deletes(id,callback){
  let QueryDelete = `DELETE FROM teacher Where id = '${id}'`;
  db.serialize(()=>{
    db.run(QueryDelete,callback);
  })

}

// //Create Data Object
// let createCb = ((err) => {
//   if(!err){
//     console.log("Berhasil Insert");
//   }
//   else{
//     console.log("Something Wrong Insert function");
//   }
// });
//
// let objData = {id:05, name:"Angga", subject:"Javascript"};
//
// create(objData,createCb);
//
// //Read CallBack
// let readcb = ((err,rows) =>{
//   if(!err){
//     console.log(rows);
//   }
//   else{
//     console.log(err);
//   }
// })
//
// read(readcb);
//
// //Update callback
// let objUpdateData = {id:05, name:"Antoni", subject : "Javascript"};
// let updatecb = ((err) =>{
//   if(!err){
//     console.log("Berhasil Update");
//   }
//   else{
//     console.log("Something Wrong Update function");
//   }
// });
//
// update(objUpdateData,updatecb);
//
//
// //Delete callback
// let id_cb = "1";
// let deletecb = ((err)=>{
//   if (!err) {
//     console.log("Berhasil Delete");
//   }
//   else{
//     console.log("Something Wrong Delete function");
//   }
// });
//
// deletes(id_cb,deletecb);


module.exports = {
  create, read, update, deletes
};
