let fs = require('fs');
let expect = require('chai').expect

describe('ProductService getAlbum Method', function() {
  it(`should type response.json() to Album @product-service-types-getalbum-responsejson-to-album`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /return\s+this\.\_http\.get\(\s*this\.\_albumUrl\s*\)\.map\(([\w\s\(\)\=\>\.\<]+)\)/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let responseJsonPart = match[1];
    expect(responseJsonPart).to.contain('<Album>');
  });
});