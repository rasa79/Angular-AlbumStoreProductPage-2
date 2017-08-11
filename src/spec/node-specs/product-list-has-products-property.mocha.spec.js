let fs = require('fs');
let expect = require('chai').expect

describe('ProductList', function() {
  it(`should have a class property named products of type Product[] @product-list-has-products-property`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product-list/product-list.component.ts').toString();
    let re = /products\s*\:\s*Product\[\]\s*/
    let match = file.match(re);
    expect(match).to.be.an('array');
  });
});