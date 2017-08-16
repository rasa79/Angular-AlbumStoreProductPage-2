let fs = require('fs');
let expect = require('chai').expect

describe('AppModule', function() {
  it(`should add the appRoutes to the NgModule imports section @app-module-ngmodule-imports-approutes`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/app.module.ts').toString();
    let re = /imports\s*\:\s*\[\s*([\w\s\(\)\.\,]+)\]/g
    let match = re.exec(file);
    expect(match).to.be.an('array');

    let arr = match[1].split(',');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    console.log(arr);

    expect(arr).to.be.an('array').that.includes('RouterModule.forRoot(appRoutes)');
  });
});