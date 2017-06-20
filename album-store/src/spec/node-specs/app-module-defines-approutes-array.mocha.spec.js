let fs = require('fs');
let expect = require('chai').expect

describe('AppModule', function() {
  it(`should have a const array named appRoutes of type Routes @app-module-defines-approutes-array`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/app.module.ts').toString();
    let re = /const\s+appRoutes\s*\:\s*Routes\s*\=\s*\[[\w\s\:\'\"\,\{\}\/\;]*\]\;?\s*\@NgModule/
    let match = file.match(re);
    expect(match).to.be.an('array');
  });
});