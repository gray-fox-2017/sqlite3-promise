const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('data.db')

function create(data){
  return new Promise((resolve,reject)=>{
    let query = `INSERT into teacher (id,name,subject) values ('${data.id}','${data.name}','${data.subject}')`
    db.run(query,function (err){
      if(!err){
        return resolve(data)      
      }
      else{
        return reject(err)
      }
    })
  })
}

function read(){
  return new Promise((resolve,reject)=>{
    let query = `SELECT * from teacher`
    db.all(query,function(err,rows){
      if(!err){
        return resolve(rows)
      }
      else{
        return reject(err)
      }
    })  
  })
}

function update(data){
  return new Promise((resolve,reject)=>{
    let query = `Update teacher set '${data.collumn}' = '${data.value}'`
    db.run(query,function(err){
      if(!err){  
        return resolve(data)
      }
      else{
        return reject(err)
      }
    })
  })
}

function deletes(data){
  return new Promise((resolve,reject)=>{
    let query = `Delete from teacher where id = '${data}'`
    db.run(query,function(err){
      if(!err){
        return resolve(data)
      }
      else{
        return reject(err)
      }
    })
  })
}

function test1(){
  create({'id':1,'name':'stedy','subject':'film'})
  .then((data) => {
    console.log(`${JSON.stringify(data)} Added!`);
  })
  .catch((err)=>{
    console.log(err);
  })
}

function test2(){
  read()
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

function test3(){
  update({'collumn':'name','new_value':'stedykeren'})
  .then((data)=>{
    console.log(`Update Success!`);
  })
  .catch((err)=>{
    console.log(err);
  })
}  
  

function test4(){
  deletes(1)
  .then((data)=>{
    console.log(`Delete Success`);
  })
  .catch((err)=>{
    console.log(err);
  })
}

test1()
test2()
test3()
test4()



module.exports = {
  create, read, update, deletes
};