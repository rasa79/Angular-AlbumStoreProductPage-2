let fs = require('fs');
let expect = require('chai').expect

describe('Product Interface', function () {
  it(`should have an id property of type number @product-interface-has-three-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.ts').toString();
    let re = /export\s+interface\s+Product\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
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
    
    let idKeyFound = false
      , idValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'id') {
        idKeyFound = true;
        if (properties[i].value.match(new RegExp(/number/))) {
          idValueFound = true;
        }
      }
    }
    expect(idKeyFound).is.true;
    expect(idValueFound).is.true;
  });

  it(`should have an artistName property of type string @product-interface-has-three-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.ts').toString();
    let re = /export\s+interface\s+Product\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
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
    
    let artistNameKeyFound = false
      , artistNameValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'artistName') {
        artistNameKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          artistNameValueFound = true;
        }
      }
    }
    expect(artistNameKeyFound).is.true;
    expect(artistNameValueFound).is.true;
  });

  it(`should have an albumName property of type string @product-interface-has-three-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/product.ts').toString();
    let re = /export\s+interface\s+Product\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
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
    
    let albumNameKeyFound = false
      , albumNameValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'albumName') {
        albumNameKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          albumNameValueFound = true;
        }
      }
    }
    expect(albumNameKeyFound).is.true;
    expect(albumNameValueFound).is.true;
  });
});