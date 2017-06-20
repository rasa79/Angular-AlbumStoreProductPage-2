let fs = require('fs');
let expect = require('chai').expect

describe('Track Interface', function() {
  it(`should exist @track-interface-exists`, function () {
    expect(fs.existsSync(__dirname + '/../../app/track.ts')).to.equal(true);

    let file = fs.readFileSync(__dirname + '/../../app/track.ts').toString();
    let re = /export\s+interface\s+Track/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});