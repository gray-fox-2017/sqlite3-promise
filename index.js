const sqlite = require('sqlite3').verbose();
const repl = require('repl');

let file = 'data.db'
let db = new sqlite.Database(file)


function create(data) {

  let query = `INSERT INTO teacher (id,name,subject) VALUES ('${data.id}','${data.name}','${data.subject}')`;

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(query, err => {
        return (err ? reject(err) : resolve(data));
      })
    })
  })

}

function read() {
  let query = "SELECT * from teacher;";

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(query, (err, rows) => {
        return (err ? reject(err) : resolve(rows));
      });
    });
  })

}

function update(data) {
  let query = `UPDATE teacher SET name='${data.name}',subject='${data.subject}' WHERE id='${data.id}';`;
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(query, err => {
        return (err ? reject(err) : resolve(data));
      });
    });
  })

}

function deletes(data) {
  let query = `DELETE from teacher where id=${data.id};`;
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(query, err => {
        return (err ? reject(err) : resolve(data));
      })
    })
  })

}




/* callback
function create(data, callback){

  let query = `INSERT INTO teacher (id,name,subject) VALUES ('${data.id}','${data.name}','${data.subject}')`;
  let message = 'Create Successfully:'
  db.serialize(() => {
    db.run(query,err => {
      if(err)
      return callback(err,null);
      else return callback(null,data,message);
    })
  })

}

function read(callback){
  let query ="SELECT * from teacher;";
  let message = 'Read:'
  db.serialize(() => {
    db.all(query,(err,rows) => {
      if(err)
      return callback(err,null);
      else return callback(null,rows,message);
    });
  });
}

function update(data,callback){
  let query = `UPDATE teacher SET name='${data.name}',subject='${data.subject}' WHERE id='${data.id}';`;
  let message = 'Update Successfully:'
  db.serialize(() => {
    db.run(query,err => {
      if(err)
        return callback(err,null)
      else return callback(null,data,message)
    });
  });
}

function deletes(data,callback){
  let query = `DELETE from teacher where id=${data.id};`;
  let message = 'Delete Successfully:'
  db.serialize(() => {
    db.run(query,err => {
      if(err)
        return callback(err,null)
      else return callback(null,data,message)
    })
  })
}
*/

let callbackData = (err,data,message) => {
    if(err)
      console.log(err)
    else{
      console.log(`${message} \n${JSON.stringify(data,null,4)}`)
    }
}


let replServer = repl.start({
  prompt: '$ '
})

replServer.context.create = create;
replServer.context.read = read;
replServer.context.update = update;
replServer.context.callbackData = callbackData;


module.exports = {
  create,
  read,
  update,
  deletes
};
