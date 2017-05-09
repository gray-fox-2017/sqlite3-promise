const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     crud.read(done);
//   })
// })

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
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
    crud.update([ '2', 'subject', 'Lintas Budaya'])
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('INSERT promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create([ '104', 'Sodikin', 'Kebaran Lamoy'])
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
    crud.deletes(4)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})