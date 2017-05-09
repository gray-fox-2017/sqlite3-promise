const {create, read, update, deletes,printData,printErr,printScs} = require('../index.js')
const assert = require('assert');
/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     create({name: 'John Doe', subject: 'Foo Bar'}, done());
//   })
// })

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
  */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    create({name: 'Bob', subject: 'Lari dari kenyataan'})
    .then(() => {
      done();
    })
    .catch((err) => {
      printErr(err,'CREATE');
      done(err);
    })


  });
});


describe('READ promise', function() {
  it('should resolve and invoke callback done', function(done) {
    // crud.create({name: 'John Doe', subject: 'Foo Bar'})
    read().
    then((data) => {
      printData(data);
      done();
    })
    .catch((err) => {
      printErr(err,'READ');
      done(err);
    })


  });
});

describe('UPDATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    let id = 15;
    update({name: 'Bukan JD', subject: 'Bukan FB', id: id })
    .then(() => {
      printScs('UPDATE',id)
      done();
    })
    .catch((err) => {
      printErr(err,'UPDATE');
      done(err);
    })
  });
});

describe('DELETE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    let id = 10;
    deletes({id: id })
    .then(() => {
      printScs('DELETE',id)
      done();
    })
    .catch((err) => {
      printErr(err,'DELETE');
      done(err);
    })
  });
});