let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should import the Product Interface @product-interface-imported-into-product-service`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /import\s*{\s*Product\s*}\s*from\s*[\'|\"]\.\/product[\'|\"]\;/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});