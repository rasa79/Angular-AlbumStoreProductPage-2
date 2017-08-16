let fs = require('fs');
let expect = require('chai').expect

describe('Album Interface', function() {
  it(`should exist @album-interface-exists part3`, function () {
    expect(fs.existsSync(__dirname + '/../../app/album.ts')).to.equal(true);

    let file = fs.readFileSync(__dirname + '/../../app/album.ts').toString();
    let re = /export\s+interface\s+Album/
    expect(file.match(re)).to.be.an('array').and.to.not.be.null;
  });
});