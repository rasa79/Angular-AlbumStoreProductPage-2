let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should exist @product-service-exists`, function () {
    expect(fs.existsSync(__dirname + '/../../app/product.service.ts')).to.equal(true);
  });

});