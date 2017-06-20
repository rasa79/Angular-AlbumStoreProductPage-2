let fs = require('fs');
let expect = require('chai').expect

describe('ProductService getProducts Method', function() {
  it(`should return an Observable typed to Product[] @product-service-getproducts-method-returns-typed-observable`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /getProducts\s*\(\s*\)\s*([\w\s\<\>\:\[\]]+)\{/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let the_type = match[1].trim();

    let re2 = /\s*\:\s*Observable\<Product\[\]\>/
    let match2 = the_type.match(re2);

    expect(match2).to.be.an('array');
    expect(match2[0]).to.contain('Observable<Product[]>');
  });

  it(`should map response json to Product[] @product-service-getproducts-method-returns-typed-observable`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /productsUrl\)\.map\([\w\s\<\>\:\[\]\.\>\<\(\)]+\s*\=\>\s*([\w\<\>\[\]]+)response/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let the_type = match[1].trim();
    let re2 = /\s*\<Product\[\]\>\s*/
    let match2 = the_type.match(re2);

    expect(match2).to.be.an('array');
    expect(match2[0]).to.contain('<Product[]>');
  });
});