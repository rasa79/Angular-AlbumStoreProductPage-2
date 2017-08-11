let fs = require('fs');
let expect = require('chai').expect

describe('Product Interface', function() {
  it(`should exist @product-interface-exists`, function () {
    expect(fs.existsSync(__dirname + '/../../app/product.ts')).to.equal(true);

    let file = fs.readFileSync(__dirname + '/../../app/product.ts').toString();
    let re = /export\s+interface\s+Product/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});