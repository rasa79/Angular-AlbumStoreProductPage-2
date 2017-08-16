let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should inject a private property named http in the constructor @product-service-injects-http`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /constructor\(([\w\s\_\:]+)\)/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arg = match[1].trim();

    let re_arg = /\s*private\s+\_http\s*\:\s*Http\s*/
    let arg_match = arg.match(re_arg);
    expect(arg_match).to.be.an('array');
  });
});