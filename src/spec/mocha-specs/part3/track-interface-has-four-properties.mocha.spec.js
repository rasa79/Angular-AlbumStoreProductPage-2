let fs = require('fs');
let expect = require('chai').expect

describe('Track Interface', function () {
  it(`should have trackNumber property of type number @track-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/track.ts').toString();
    let re = /export\s+interface\s+Track\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
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
    
    let trackNumberKeyFound = false
      , trackNumberValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'trackNumber') {
        trackNumberKeyFound = true;
        if (properties[i].value.match(new RegExp(/number/))) {
          trackNumberValueFound = true;
        }
      }
    }
    expect(trackNumberKeyFound).is.true;
    expect(trackNumberValueFound).is.true;
  });

  it(`should have trackName property of type string @track-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/track.ts').toString();
    let re = /export\s+interface\s+Track\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
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
    
    let trackNameKeyFound = false
      , trackNameValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'trackName') {
        trackNameKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          trackNameValueFound = true;
        }
      }
    }
    expect(trackNameKeyFound).is.true;
    expect(trackNameValueFound).is.true;
  });

  it(`should have trackLength property of type string @track-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/track.ts').toString();
    let re = /export\s+interface\s+Track\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
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
    
    let trackLengthKeyFound = false
      , trackLengthValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'trackLength') {
        trackLengthKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          trackLengthValueFound = true;
        }
      }
    }
    expect(trackLengthKeyFound).is.true;
    expect(trackLengthValueFound).is.true;
  });
  it(`should have trackPrice property of type number @track-interface-has-four-properties`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/track.ts').toString();
    let re = /export\s+interface\s+Track\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
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
    
    let trackPriceKeyFound = false
      , trackPriceValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'trackPrice') {
        trackPriceKeyFound = true;
        if (properties[i].value.match(new RegExp(/number/))) {
          trackPriceValueFound = true;
        }
      }
    }
    expect(trackPriceKeyFound).is.true;
    expect(trackPriceValueFound).is.true;
  });
});