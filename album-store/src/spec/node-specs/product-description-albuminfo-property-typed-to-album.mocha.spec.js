let fs = require('fs');
let expect = require('chai').expect

describe('ProductDescription', function() {
  it(`should have an albumInfo property typed to Album @product-description-albuminfo-property-typed-to-album`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product-description/product-description.component.ts').toString();
    let re = /albumInfo\s*\:\s*(\w+)/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let albumInfoType = match[1].trim();
    expect(albumInfoType).to.contain('Album');
  });
});