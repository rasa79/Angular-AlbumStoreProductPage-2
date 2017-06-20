let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should import the Album Inteface @album-interface-imported-into-product-service`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /import\s*{\s*Album\s*}\s*from\s*[\'|\"]\.\/album[\'|\"]\;/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});