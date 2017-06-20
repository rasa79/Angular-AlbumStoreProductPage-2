let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should have a method named getProducts() that takes no parameters @product-service-has-getproducts-method`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /getProducts\s*\(\s*\)(\s*\:\s*Observable\<Product\[\]\>\s*)?\s*\{[\s\w\.\(\)\;=><\[\]]+\}/
    let match = file.match(re);
    expect(match).to.be.an('array');
  });
});