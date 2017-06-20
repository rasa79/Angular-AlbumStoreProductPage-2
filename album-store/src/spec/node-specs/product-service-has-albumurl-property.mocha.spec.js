let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should have a private class property named albumUrl set to the correct value @product-service-has-albumurl-property`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /private\s+\_albumUrl\s*(:\s*string\s*)?\=\s*[\'|\"](\.\.\/assets\/album.json)[\'|\"]\s*\;/
    let match = file.match(re);
    expect(match).to.be.an('array');
  });
});