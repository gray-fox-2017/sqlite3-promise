const LearnPromise = require('../index.js')


/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('create', function() {
//   it('should invoke callback done', function(done) {
//     create({ id: 10, name: 'John Doe', subject: 'Foo Bar'}, done);
//   })
// })

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    LearnPromise.create({id : 1, name : 'erwin' , subject : 'nodejs'})
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
    LearnPromise.read()
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
    LearnPromise.update({id : 1, name : 'erwinsss' , subject : 'nodejs'})
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
    LearnPromise.delete({id : 1})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
