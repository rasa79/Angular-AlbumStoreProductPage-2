let fs = require('fs');
let expect = require('chai').expect

describe('ProductList', function() {
  it(`should import the Product Inteface @product-interface-imported-into-product-list`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product-list/product-list.component.ts').toString();
    let re = /import\s*{\s*Product\s*}\s*from\s*[\'|\"]\.\.\/product[\'|\"]\;/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});