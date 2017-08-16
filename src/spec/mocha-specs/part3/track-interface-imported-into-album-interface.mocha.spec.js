let fs = require('fs');
let expect = require('chai').expect

describe('Album Interface', function() {
  it(`should import the Track Interface @track-interface-imported-into-album-interface`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/album.ts').toString();
    let re = /import\s*{([\w,\s]+)}\s*from\s*[\'|\"]\.\/track[\'|\"]\;/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arr = match[1].split(',');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    expect(arr).to.be.an('array').that.includes('Track');
  });
});