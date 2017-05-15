const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done);
//   })
// })
//
// describe('READ', function() {
//   it('should invoke callback done', function(done) {
//     crud.read(done);
//   })
// })
//
// describe('UPDATE', function() {
//   it('should invoke callback done', function(done) {
//     crud.update('name','Not John Doe','1',done);
//   })
// })
//
// describe('DELETE', function() {
//   it('should invoke callback done', function(done) {
//     crud.deletes('1',done);
//   })
// })
/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({"id" : 7, "name" : "Mulyadi", "subject" : "Mat"})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('READ promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.read()
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('UPDATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.update('name','Not John Doe','1')
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('DELETE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.deletes('1')
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
