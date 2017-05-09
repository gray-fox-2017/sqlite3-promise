const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
describe('CREATE', function() {
  it('should invoke callback done', function(done) {
    crud.read(done);
  })
})

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
/*describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    create()
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})*/
