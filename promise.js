const fs = require('fs');

function bacaFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('text.txt', 'utf8', (err, data) => {
      if (!err) {
        return resolve(data);
      } else {
        return reject(err);
      }
    })
  });
}
function test() {
  bacaFile()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err);
  });
}
test();
module.exports = bacaFile;