let fs = require('fs');
let expect = require('chai').expect

describe('ProductService', function() {
  it(`should import the Http and Response classes @product-service-imports-http-and-response`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.service.ts').toString();
    let re = /import\s*{([\w,\s]+)}\s*from\s*[\'|\"]@angular\/http[\'|\"]\;/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arr = match[1].split(',');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    expect(arr).to.be.an('array').that.includes('Http');
    expect(arr).to.be.an('array').that.includes('Response');
  });
});