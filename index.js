const sqlite3 = require('sqlite3').verbose();
const file = 'data.db';
const db = new sqlite3.Database(file)
const repl = require('repl');
const REPLServer = repl.start({prompt : '> '});

// function create(data, callback){
//   db.serialize(function(){
//     db.run(`INSERT INTO teacher(id,name,subject) VALUES ('${data.id}','${data.name}','${data.subject}');`, callback);
//   });
// }
//
// function read(callback){
//   db.serialize(function(){
//     db.all('select * from teacher;',callback)
//   })
// }
//
// function update(column_set,value_set,where_id,callback){
//   db.serialize(function(){
//     db.run(`UPDATE teacher SET '${column_set}' = '${value_set}'  WHERE id = '${where_id}';`, callback);
//   });
// }
//
// function deletes(id_deleted,callback){
//   db.serialize(function(){
//     db.run(`DELETE FROM teacher WHERE id = '${id_deleted}';`, callback);
//   });
// }

// let callbackData = (err,result) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// }

function create(data){
  return new Promise((res,rej)=>{
    db.serialize(() => {
      db.run(`INSERT INTO teacher(id,name,subject) VALUES ('${data.id}','${data.name}','${data.subject}');`, (err) => {
        if(!err){
          res()
        } else {
          rej(err);
        }
      });
    });
  })
}

function read(){
  return new Promise((res,rej) => {
    db.serialize(function(){
      db.all('select * from teacher;', (err)=>{
        if(!err){
          res()
        } else {
          rej(err);
        }
      })
    })
  })
}

function update(column_set,value_set,where_id){
  return new Promise((res,rej)=>{
    db.serialize(() => {
      db.run(`UPDATE teacher SET '${column_set}' = '${value_set}'  WHERE id = '${where_id}';`, (err) => {
        if(!err){
          res()
        } else {
          rej(err);
        }
      });
    });
  })
}

function deletes(id_deleted){
  return new Promise((res,rej) => {
    db.serialize(function(){
      db.run(`DELETE FROM teacher WHERE id = '${id_deleted}';`, (err) => {
        if (!err){
          res()
        } else {
          rej(err)
        }
      });
    });
  })
}


// REPLServer.context.create = create;
// REPLServer.context.read = read;
// REPLServer.context.update = update;
// REPLServer.context.deletes = deletes;
// REPLServer.context.callback = callbackData;
module.exports = {
  create, read, update, deletes
};
