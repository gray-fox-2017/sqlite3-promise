const bacaFile = require('../index.js');
const assert = require('assert');

function tambah(nilai) {
  return nilai + 1;
}

describe('tambah()', function() {
  it('should add one', function() {
    assert(3, tambah(2));
  })
})

describe('bacaFile()', function() {
  it('should invoke callback when resolve', function(done) {
    bacaFile()
    .then(() => {
      done();
    })
    .catch(() => {
      done(true);
    })
  })
})