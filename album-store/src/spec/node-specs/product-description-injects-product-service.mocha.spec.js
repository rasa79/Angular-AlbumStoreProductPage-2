let fs = require('fs');
let expect = require('chai').expect

describe('ProductDescription', function() {
  it(`should inject a private property named productService in the constructor @product-description-injects-product-service`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product-description/product-description.component.ts').toString();
    let re = /constructor\(([\w\s\_\:]+)\)/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arg = match[1].trim();

    let re_arg = /\s*private\s+\_productService\s*\:\s*ProductService\s*/
    let arg_match = arg.match(re_arg);
    expect(arg_match).to.be.an('array');
  });
});