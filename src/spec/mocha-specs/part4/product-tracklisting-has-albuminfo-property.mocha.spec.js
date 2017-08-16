let fs = require('fs');
let expect = require('chai').expect

describe('ProductTracklisting', function() {
  it(`should have a class property named albumInfo of type Album @product-tracklisting-has-albuminfo-property`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product-tracklisting/product-tracklisting.component.ts').toString();
    let re = /albumInfo\s*\:\s*Album\s*/
    let match = file.match(re);
    expect(match).to.be.an('array');
  });
});