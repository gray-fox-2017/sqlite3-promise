const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done);
//   })
// })

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({"id" : 2, "name" : "juliati", "subject" : "Makin tau"})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('CREATE promise', function() {
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

describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.update("id": 2 , "name": "sofiyan", "subject": "makan sama tempe")
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.deletes("id": 2)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
