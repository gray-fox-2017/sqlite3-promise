//const crud = require('../index.js')
const {create, read, update, deletes} = require('../index.js');

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
**/
/*
describe('CREATE', function() {
  it('should invoke callback done', function(done) {
    create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done());
  })
})

describe('READ', function() {
  it('should invoke callback done', function(done) {
    read(done());
  })
})


describe('UPDATE', function() {
  it('should invoke callback done', function(done) {
    update(1, 'Shabrina', 'Kimia', done());
  })
})

describe('DELETES', function() {
  it('should invoke callback done', function(done) {
    deletes(1, done());
  })
})
//*/
/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
*/

describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    create({ id: 2, name: 'John Doe', subject: 'Foo Bar'})
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})

describe('READ promise', function() {
  it('should resolve and invoke callback done', function(done) {
    read()
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})

describe('UPDATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    update(2, 'shabrina', 'kimia')
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})

describe('DELETES promise', function() {
  it('should resolve and invoke callback done', function(done) {
    deletes(2)
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})

