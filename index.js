"use strict"

const repl = require('repl');
const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('data.db');
let {createTable,seedData} = require('./setup.js');

let replServer = repl.start({
  prompt: '>> ',
  input: process.stdin,
  output: process.stdout
})

// function runQuery (query,hasReturn = false){
//
//   return new Promise((resolve,reject) => {
//     db.serialize(() => {
//       if (hasReturn) {
//         db.all(query,(err,rows)=> {
//           console.log('READ');
//           return (err ?  reject(err) : resolve(rows));
//         })
//       } else {
//         db.run(query, (err)=> {
//           return (err ?  reject(err) : resolve());
//         })
//       }
//     });
//   });
// }
function create(data){
  let query = `INSERT INTO teacher (name,subject) VALUES('${data.name}','${data.subject}')`;

  return new Promise((resolve,reject) => {
    db.serialize(() => {
      db.run(query, (err)=> {
        return (err ?  reject(err) : resolve());
      })
    });
  });
}

function read(){
  let query = `SELECT * FROM teacher`;
  let callback = {printData : printData,printErr : printErr};

  return new Promise((resolve,reject) => {
    db.serialize(() => {
      db.all(query,(err,rows)=> {
        console.log('READ');
        return (err ?  reject(err) : resolve(rows));
      })

    });
  });
  // runQuery(query,false)
  // .then( (data) => printData(data) )
  // .catch( (err) => printErr(err,'INSERT') );

}

function update(data){
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = '${data.id}'`
  return new Promise((resolve,reject) => {
    db.serialize(() => {
      db.run(query, (err)=> {
        return (err ?  reject(err) : resolve());
      })
    });
  });
  // runQuery(query,false)
  // .then( () => printScs('UPDATE',data.id) )
  // .catch( (err) => printErr(err,'UPDATE') );
}

function deletes(id){
  let query = `DELETE FROM teacher where id = '${id}'`;
  return new Promise((resolve,reject) => {
    db.serialize(() => {
      db.run(query, (err)=> {
        return (err ?  reject(err) : resolve());
      })
    });
  });
  // runQuery(query,false,printErr)
  // .then( () => printScs('DELETE',data.id) )
  // .catch( (err) => printErr(err,'DELETE') );
}

const printData = (datas) => {
  datas.forEach((x)=>{
    console.log(`${x.id} | ${x.name} | ${x.subject}`);
  });
}
const printScs = (activity,id) => {
  console.log(`SUCCEED TO ${activity} ${id}`)
}
const printErr = (err,activity) => {
  console.log(`FAILED TO ${activity}`)
  console.log(err);
}
module.exports = {
  create, read, update, deletes,printData,printErr,printScs
};

replServer.context.createTable = createTable;
replServer.context.seedData = seedData;
replServer.context.read = read;
replServer.context.create = create;
replServer.context.update = update;
replServer.context.deletes = deletes;
