
const sqlite = require('sqlite3').verbose();
const file = 'data.db'
const db = new sqlite.Database(file)

function read() {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM teacher;";
    db.serialize(function () {
      db.all(query, function (err, rows) {
        if (!err) {
          return resolve(rows)
        } else {
          return reject(err)
        }
      })
    })
  })
}

function create(teacherObj) {
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO teacher (id, name, subject) VALUES (${teacherObj.id}, '${teacherObj.name}', '${teacherObj.subject}');`;
    db.serialize(function () {
      db.run(query, function (err) {
        if (!err) {
          return resolve("Successfull added data")
        } else {
          return reject(err)
        }
      });
    });
  });
}

function update(teacherObj) {
  return new Promise((resolve, reject) => {
    let query = `UPDATE teacher SET name = '${teacherObj.name}', subject = '${teacherObj.subject}' WHERE id = ${teacherObj.id};`;
    db.serialize(function () {
      db.run(query, function (err) {
        if (!err) {
          return resolve("Successfull update data")
        } else {
          return reject(err)
        }
      });
    });
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    let query = `DELETE FROM teacher WHERE id = ${id};`;
    db.serialize(function () {
      db.run(query, function (err) {
        if (!err) {
          return resolve("Successfull update data")
        } else {
          return reject(err)
        }
      });
    });
  });
}


module.exports = {
  create, read, update, remove
};


// remove()

// promise read
// read()
// .then((rows) => {
//   console.log(rows);
// })
// .catch((err) => {
//   console.log(err);
// })

// promise create
// create({id : 3, name : "joko", subject : "keluarga"})
// .then(() => {
//   console.log("Success created");
// })
// .catch((err) => {
//   console.log(err);
// })

// update({id : 1, name : "fajar", subject : "teman"})
// .then(() => {
//   console.log("Success updated");
// })
// .catch((err) => {
//   console.log(err);
// })

// remove(0)
// .then(() => {
//   console.log("Success deleted");
// })
// .catch((err) => {
//   console.log(err);
// })

// function create(data, callback){}
//
// // function read(callback){}
//
// function update(callback){}
//
// function deletes(callback){}
//
