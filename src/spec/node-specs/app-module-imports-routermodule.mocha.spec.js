let fs = require('fs');
let expect = require('chai').expect

describe('AppModule', function() {
  it(`should import the RouterModule and Routes classes @app-module-imports-routermodule`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/app.module.ts').toString();
    let re = /import\s*{([\w,\s]+)}\s*from\s*[\'|\"]@angular\/router[\'|\"]\;/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arr = match[1].split(',');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    expect(arr).to.be.an('array').that.includes('RouterModule');
    expect(arr).to.be.an('array').that.includes('Routes');
  });
});