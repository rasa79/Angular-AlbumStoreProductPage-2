let fs = require('fs');
let expect = require('chai').expect

describe('AppModule', function() {
  it(`should have a const array named appRoutes where index 1 contains an object with the correct keys and values @app-module-approutes-array-contains-correct-object2`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/app.module.ts').toString();
    let re = /const\s+appRoutes\s*\:\s*Routes\s*\=\s*\[([\w\s\:\'\"\,\{\}\/\;]*)\]\;?\s*\@NgModule/
    let match = file.match(re);

    let match_trimmed = match[1].trim();    
    let re2 = /\{\s*(?:\w+)\s*\:\s*(?:\'|\")(?:[\w\/\:]+)(?:\'|\")\s*\,\s*(?:\w+)\s*\:\s*(?:\w+)\s*\}\,?/g
    let match2 = match_trimmed.match(re2);

    let re3 = /\{\s*(\w+)\s*\:\s*(?:\'|\")([\w\/\:]+)(?:\'|\")\s*\,\s*(\w+)\s*\:\s*(\w+)\s*\}/
    let match3 = match2[1].match(re3)

    let key1 = match3[1];
    let value1 = match3[2];
    let key2 = match3[3];
    let value2 = match3[4];

    expect(key1).equals('path');
    expect(value1).equals('product/:id');
    expect(key2).equals('component');
    expect(value2).equals('ProductPageComponent');
  });
});