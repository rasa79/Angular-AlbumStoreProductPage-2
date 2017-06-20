let fs = require('fs');
let expect = require('chai').expect

describe('AppModule', function() {
  it(`should import the ProductService @product-service-imported-into-app-module`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/app.module.ts').toString();
    let re = /import\s*{\s*ProductService\s*}\s*from\s*[\'|\"]\.\/product\.service[\'|\"]\;/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});