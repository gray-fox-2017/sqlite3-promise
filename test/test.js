const crud = require('../index.js')
const crudP = require('../index-promise.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */

describe('CREATE', function() {
  it('should invoke callback done', function(done) {
    crud.create({ id: 2, name: 'John Doe', subject: 'Foo Bar'}, done);
  })
})

describe('READ', function() {
  it('should invoke callback done', function(done) {
    crud.read(done);
  })
})

describe('UPDATE', function() {
  it('should invoke callback done', function(done) {
    crud.update(2, {name: 'John Doe', subject: 'Foo Bar'}, done);
  })
})

describe('DELETE', function() {
  it('should invoke callback done', function(done) {
    crud.deletes(2, done);
  })
})

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crudP.create({ id: 2, name: 'John Doe', subject: 'Foo Bar'})
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
    crudP.read()
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
    crudP.update(2, {name: 'John Doe', subject: 'Foo Bar'})
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
    crudP.deletes(2)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
