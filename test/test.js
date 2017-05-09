const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
//  */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done);
//   })
// })
// 
// /**
//  * contoh testing function dengan promise
//  * comment apabila tidak digunakan
//  */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({'id':1,'name':'stedy','subject':'film'})
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
    crud.update({'collumn':'name','value':'stedykeren'})
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
    crud.deletes({'id':1})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
// 
// function test1(){
//   crud.create({'id':1,'name':'stedy','subject':'film'})
//   .then((data) => {
//     console.log(`${JSON.stringify(data)} Added!`);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// }
// 
// function test3(){
//   crud.read()
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// }
// 
// function test2(){
//   crud.update({'collumn':'name','value':'stedykeren'})
//   .then((data)=>{
//     console.log(`Update Success!`);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// }  
//   
// 
// function test4(){
//   crud.deletes({'id':1})
//   .then((data)=>{
//     console.log(`Delete Success`);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// }
// 
// 
// 
// test1()
// test2()
// test3()
// test4()