let fs = require('fs');
let expect = require('chai').expect

describe('ProductDescription', function() {
  it(`should import the ProductService @product-service-imported-into-product-description`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product-description/product-description.component.ts').toString();
    let re = /import\s*{\s*ProductService\s*}\s*from\s*[\'|\"]\.\.\/product\.service[\'|\"]\;/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});