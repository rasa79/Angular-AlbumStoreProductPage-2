let fs = require('fs');
let expect = require('chai').expect

describe('ProductList', function() {
  it(`should inject a private property named productService in the constructor @product-list-injects-product-service`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product-list/product-list.component.ts').toString();
    let re = /constructor\(([\w\s\_\:]+)\)/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arg = match[1].trim();

    let re_arg = /\s*private\s+\_productService\s*\:\s*ProductService\s*/
    let arg_match = arg.match(re_arg);
    expect(arg_match).to.be.an('array');
  });
});