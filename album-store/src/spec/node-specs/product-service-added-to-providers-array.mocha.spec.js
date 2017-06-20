let fs = require('fs');
let expect = require('chai').expect

describe('AppModule', function() {
  it(`should add the ProductService to the providers array @product-service-added-to-providers-array`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/app.module.ts').toString();
    let re = /providers\s*:\s*\[\s*ProductService\s*\]\s*\,/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});