let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should have a method named getAlbum() that takes one parameter @product-service-has-getalbum-method`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /getAlbum\s*\(\s*id\s*:\s*number\s*\)(\s*\:\s*Observable\<Album\>\s*)?\s*\{[\s\w\.\(\)\;=><]+\}/
    let match = file.match(re);
    expect(match).to.be.an('array');
  });
});