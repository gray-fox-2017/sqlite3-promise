const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     crud.create({name: 'John', subject: 'Foo Bar'}, done);
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
//     crud.update({ id: 17, name: 'John', subject: 'Foo Bar'}, done);
//   })
// })
//
// describe('DELETE', function() {
//   it('should invoke callback done', function(done) {
//     crud.deletes(18,done);
//   })
// })

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({ id: '' , name: 'John', subject: 'Foo Bar'})
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
    crud.update({id:18,name:'asdsfgh',subject:'adsfg'})
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
    crud.deletes(18)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})