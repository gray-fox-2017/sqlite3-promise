const crud = require('../index.js')
const crudProm = require('../indexPromise.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
describe('CREATE', function() {
  it('should invoke callback done', function(done) {
    crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done);
  })
})

describe('READ', function() {
  it('should invoke callback done', function(done) {
    crud.read(done);
  })
})

describe('UPDATE', function() {
  it('should invoke callback done', function(done) {
    crud.update(done);
  })
})

describe('DELETE', function() {
  it('should invoke callback done', function(done) {
    crud.deletes(1, done);
  })
})

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crudProm.create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done)
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
    crudProm.read(done)
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
    crudProm.update(done)
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
    crudProm.deletes(1, done)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
