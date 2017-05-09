const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('./data.db')
const repl = require('repl')
// const replServer = repl.start({
//   prompt:'SQLite3 with Promise>>>> ',
//   input:process.stdin,
//   output:process.stdout
// })

// function create(data,callback = createCB){
//   db.serialize(() => {
//     let query = `INSERT INTO teacher(name,subject) VALUES ('${data.name}','${data.subject}');`;
//     db.run(query,callback)
//   })
// }
//
// let createCB = err =>{
//   if(!err){
//     console.log('entry succeed!');
//   } else {
//     console.log(err);
//   }
// }
//
// function read(callback = readCB){
//   db.serialize(() => {
//     let query = `SELECT * FROM teacher;`;
//     db.all(query,callback)
//   })
// }
//
// let readCB = (err,rows)=>{
//   if(!err){
//     console.log(rows);
//   } else {
//     console.log(err);
//   }
// }
//
// function update(data,callback = updateCB){
//   db.serialize(() => {
//     let query = `UPDATE teacher SET name='${data.name}',subject='${data.subject}' WHERE id=${data.id};`;
//     db.run(query,callback)
//   })
// }
//
// let updateCB = err=>{
//   if(!err){
//     console.log('update succeed!');
//   } else {
//     console.log(err);
//   }
// }
//
// function deletes(id,callback=deletesCB){
//   db.serialize(() => {
//     let query = `DELETE FROM teacher WHERE id=${id};`;
//     db.run(query,callback)
//   })
// }
//
// let deletesCB = err=>{
//   if(!err){
//     console.log('deletion succed');
//   } else {
//     console.log(err);
//   }
// }

function create(data){
  return new Promise((res,rej)=>{
    db.serialize(() => {
      let query = `INSERT INTO teacher(name,subject) VALUES ('${data.name}','${data.subject}');`;
      db.run(query,(err)=>{
        if(!err){
          res()
        } else {
          rej(err)
        }
      })
    })
  })
}

function read(){
  return new Promise((res,rej)=>{
    db.serialize(() => {
      let query = `SELECT * FROM teacher;`;
      db.all(query,(err,rows)=>{
        if(!err){
          res(rows)
        } else {
          rej(err)
        }
      })
    })
  })
}

function update(data){
  return new Promise((res,rej)=>{
    db.serialize(() => {
      let query = `UPDATE teacher SET name='${data.name}',subject='${data.subject}' WHERE id=${data.id};`;
      db.run(query,(err)=>{
        if(!err){
          res()
        } else {
          rej(err)
        }
      })
    })
  })
}

function deletes(id){
  return new Promise((res,rej)=>{
    db.serialize(() => {
      let query = `DELETE FROM teacher WHERE id=${id};`;
      db.run(query,(err)=>{
        if(!err){
          res();
        } else {
          rej(err);
        }
      })
    })
  })
}

function createThis(data) {
  create(data).then(()=>{console.log('insertion succedd')}).catch((err)=>{console.log(err)})
}

function readThis() {
  read().then((rows)=>{console.log(rows)}).catch((err)=>{console.log(err)})
}


function updateThis(data) {
  update(data).then(()=>{console.log('update succeed!')}).catch((err)=>{console.log(err)})
}

function deletesThis(id) {
  deletes(id).then(()=>{console.log('deletion succed!')}).catch((err)=>{console.log(err)})
}


module.exports = {
  create, read, update, deletes
};


// replServer.context.create = create;
// replServer.context.read = read;
// replServer.context.update = update;
// replServer.context.deletes = deletes;

// replServer.context.create = createThis;
// replServer.context.read = readThis;
// replServer.context.update = updateThis;
// replServer.context.deletes = deletesThis;
