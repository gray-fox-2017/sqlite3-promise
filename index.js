const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('data.db')

// const repl = require('repl')

function create(data){
  return new Promise((resolve, reject)=>{
  let INSERT_DATA = `INSERT INTO teacher (id, name, subject) VALUES ('${data.id}', '${data.name}', '${data.subject}')`;
  db.serialize(()=>{
    db.run(INSERT_DATA, (err)=>{
      if(!err) {
        return resolve(`Insert data berhasil : ${JSON.stringify(data, null, 4)}`)
      } else {
        return reject(err);
      }
    })
  })
  })
}

function read(){
  return new Promise((resolve, reject)=>{
  let READ_DATA = `SELECT* FROM teacher`;
  db.serialize(()=>{
    db.all(READ_DATA, (err, rows)=>{
      if(!err) {
        return resolve(rows);
      } else {
        return reject(err);
      }
    })
  })
  })
}

function update(data){
  return new Promise((resolve, reject)=>{
  let UPDATE_DATA = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${data.id}`;
  db.serialize(()=>{
    db.run(UPDATE_DATA, (err)=>{
      if (!err) {
        return resolve(`Data dengan id : ${JSON.stringify(data.id, null, 4)}\nterupdate dengan data baru : ${JSON.stringify(data, null, 4)} `)
      } else {
        return reject(err);
      }
    })
  })
  })
}

function deletes(data){
  return new Promise((resolve, reject)=>{
  let DELETE_DATA = `DELETE FROM teacher WHERE id =${data.id}`
  db.serialize(()=>{
    db.run(DELETE_DATA, (err)=>{
      if (!err) {
        return resolve(`Data dengan id : ${data.id} deleted`)
      } else {
        return reject(err);
      }
    })
  })
  })
}

function test1() {
  create({"id" : 2, "name" : "juliati", "subject" : "Makin tau"})
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

function test2() {
  read()
  .then((data)=>{
    console.log(`${JSON.stringify(data, null, 4)}`);
  })
  .catch((err)=>{
    console.log(err);
  })
}

function test3() {
  update({"id": 2 , "name": "sofiyan", "subject": "makan sama tempe"})
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

function test4() {
  deletes({"id":2})
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

test1();
// test2();
// test3();
// test4();

module.exports = {
  create, read, update, deletes
};



// const sqlite = require('sqlite3').verbose()
// const db = new sqlite.Database('data.db')
//
// const repl = require('repl')
//
//
// function create(data, callback){
//   let INSERT_DATA = `INSERT INTO teacher (id, name, subject) VALUES ('${data.id}', '${data.name}', '${data.subject}')`;
//   db.serialize(()=>{
//     db.run(INSERT_DATA, (err)=>{
//       if(!err) {
//         return callback(null, 'Insert data berhasil')
//       } else {
//         return callback(err);
//       }
//     })
//   })
// }
//
// function read(callback){
//   let READ_DATA = `SELECT* FROM teacher`;
//   db.serialize(()=>{
//     db.all(READ_DATA, (err, rows)=>{
//       if(!err) {
//         return callback(null, rows);
//       } else {
//         return callback(err);
//       }
//     })
//   })
// }
//
// function update(data, callback){
//   let UPDATE_DATA = `UPDATE teacher SET name = ${data.name}, subject = ${data.subject} WHERE id = ${data.id}`
//   db.serialize(()=>{
//     db.run(UPDATE_DATA, (err)=>{
//       if (!err) {
//         return callback(null, `Data dengan id : ${data.id} terupdate`)
//       } else {
//         return callback(err);
//       }
//     })
//   })
// }
//
// function deletes(data, callback){
//   let DELETE_DATA = `DELETE FROM teacher WHERE id =${data.id}`
//   db.serialize(()=>{
//     db.run(UPDATE_DATA, (err)=>{
//       if (!err) {
//         return callback(null, `Data dengan id : ${data.id} deleted`)
//       } else {
//         return callback(err);
//       }
//     })
//   })
// }
//
// let callback = (err, result) =>{
//   if(!err){
//     console.log(result);
//   } else {
//     console.log(err);
//   }
// }
//
// let replServer = repl.start({prompt: '>>'});
//
// replServer.context.callback = callback;
// replServer.context.create = create;
// replServer.context.read = read;
// replServer.context.update = update;
// replServer.context.deletes = deletes;
//
//
// module.exports = {
//   create, read, update, deletes
// };
