let fs = require('fs');
let expect = require('chai').expect

describe('ProductService getAlbum Method', function() {
  it(`should return an Observable typed to Album @product-service-getalbum-method-returns-typed-observable`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /getAlbum\s*\(\s*id\s*:\s*number\s*\)\s*([\w\s\<\>\:]+)\{/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let the_type = match[1].trim();

    let re2 = /\s*\:\s*Observable\<Album\>/
    let match2 = the_type.match(re2);

    expect(match2).to.be.an('array');
    expect(match2[0]).to.contain('Observable<Album>');
  });
});