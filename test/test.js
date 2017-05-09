const crud = require('../index-callback.js');
const crudPromise = require('../index.js');
/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
describe('Create Callback', function() {
  it('should invoke callback done', function(done) {
    crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done());
  })
});
describe('Read Callback', function() {
  it('should invoke callback done', function(done) {
    crud.read(done());
  })
});
describe('Update Callback', function() {
  it('should invoke callback done', function(done) {
    crud.update({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done());
  })
});
describe('Delete Callback', function() {
  it('should invoke callback done', function(done) {
    crud.deletes(1, done());
  })
});

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crudPromise.create({ id: 1, name: 'John', subject: 'Foo Bar'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
describe('Read promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crudPromise.read()
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
describe('Update promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crudPromise.update({ id: 1, name: 'John', subject: 'Foo Bar'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
describe('Delete promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crudPromise.deletes(1)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
