let fs = require('fs');
let expect = require('chai').expect

describe('Album Interface', function () {
  it(`should have name property of type string @album-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/album.ts').toString();
    let re = /export\s+interface\s+Album\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arr = match[1].split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    let properties = [];    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 0) {
        let obj = {};
        obj['key'] = arr[i].trim().split(':')[0].trim();
        obj['value'] = arr[i].trim().split(':')[1].trim();
        properties[i] = obj;
      }
    }
    
    let nameKeyFound = false
      , nameValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'name') {
        nameKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          nameValueFound = true;
        }
      }
    }
    expect(nameKeyFound).is.true;
    expect(nameValueFound).is.true;
  });

  it(`should have releaseDate property of type string @album-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/album.ts').toString();
    let re = /export\s+interface\s+Album\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arr = match[1].split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    let properties = [];    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 0) {
        let obj = {};
        obj['key'] = arr[i].trim().split(':')[0].trim();
        obj['value'] = arr[i].trim().split(':')[1].trim();
        properties[i] = obj;
      }
    }
    
    let releaseDateKeyFound = false
      , releaseDateValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'releaseDate') {
        releaseDateKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          releaseDateValueFound = true;
        }
      }
    }
    expect(releaseDateKeyFound).is.true;
    expect(releaseDateValueFound).is.true;
  });

  it(`should have coverImage property of type string @album-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/album.ts').toString();
    let re = /export\s+interface\s+Album\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arr = match[1].split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    let properties = [];    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 0) {
        let obj = {};
        obj['key'] = arr[i].trim().split(':')[0].trim();
        obj['value'] = arr[i].trim().split(':')[1].trim();
        properties[i] = obj;
      }
    }
    
    let coverImageKeyFound = false
      , coverImageValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'coverImage') {
        coverImageKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          coverImageValueFound = true;
        }
      }
    }
    expect(coverImageKeyFound).is.true;
    expect(coverImageValueFound).is.true;
  });
  it(`should have tracks property of type Track[] @album-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/album.ts').toString();
    let re = /export\s+interface\s+Album\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
    let match = file.match(re);
    expect(match).to.be.an('array');

    let arr = match[1].split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    let properties = [];    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 0) {
        let obj = {};
        obj['key'] = arr[i].trim().split(':')[0].trim();
        obj['value'] = arr[i].trim().split(':')[1].trim();
        properties[i] = obj;
      }
    }
    
    let tracksKeyFound = false
      , tracksValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'tracks') {
        tracksKeyFound = true;
        if (properties[i].value.match(new RegExp(/Track\[\]/))) {
          tracksValueFound = true;
        }
      }
    }
    expect(tracksKeyFound).is.true;
    expect(tracksValueFound).is.true;
  });
});