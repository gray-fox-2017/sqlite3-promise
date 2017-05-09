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

function runQuery (query,hasReturn = false,fcallback,activity = ''){
  db.serialize(() => {
    if (hasReturn) {
      db.all(query,(err,rows)=> {
        console.log('READ');
        err ?  fcallback.printErr(err) : fcallback.printData(rows);
      })
    } else {
      db.run(query, (err)=> {
        err ?  fcallback(err) : console.log(`Success To ${activity}!`)
      })
    }

  });
}
function create(data){
  let query = `INSERT INTO teacher (name,subject) VALUES('${data.name}','${data.subject}')`;
  runQuery(query,false,printErr,'CREATE');
}

function read(){
  let query = `SELECT * FROM teacher`;
  let callback = {printData : printData,printErr : printErr};
  runQuery(query,true,callback);
}

function update(data){
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = '${data.id}'`
  runQuery(query,false,printErr,'UPDATE');
}

function deletes(id){
  let query = `DELETE FROM teacher where id = '${id}'`;
  runQuery(query,false,printErr,'DELETE');
}

const printData = (datas) => {
  datas.forEach((x)=>{
    console.log(`${x.id} | ${x.name} | ${x.subject}`);
  });
}

const printErr = (err) => {
  console.log(err);
}
module.exports = {
  create, read, update, deletes
};

replServer.context.createTable = createTable;
replServer.context.seedData = seedData;
replServer.context.read = read;
replServer.context.create = create;
replServer.context.update = update;
replServer.context.deletes = deletes;
