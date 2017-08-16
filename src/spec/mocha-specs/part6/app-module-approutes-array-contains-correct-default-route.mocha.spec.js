let fs = require('fs');
let expect = require('chai').expect
let ts = require('typescript');

class ProductListComponent {

}

class ProductPageComponent {

}

let ar;

describe('AppModule', function() {
  it(`should have a const array named appRoutes where index 1 contains an object with the correct keys and values @app-module-approutes-array-contains-correct-default-route`, function () {
    let file = fs.readFileSync(__dirname + '/../../app/app.module.ts').toString();
    let re = /(const\s+appRoutes\s*\:\s*Routes\s*\=\s*\[(?:[\w\s\:\'\"\,\{\}\/\;]*)\]\;)\s*\@NgModule/
    let match = file.match(re);

    let match_trimmed = match[1].trim();

    let js = ts.transpile(match_trimmed)
    
    eval(js + "ar = appRoutes");

    expect(ar[0].path).to.contain('products');
    expect(ar[0].component.toString()).to.contain('class ProductListComponent');
    expect(ar[1].path).to.contain('product/:id');
    expect(ar[1].component.toString()).to.contain('class ProductPageComponent');
    expect(ar[2].path).to.contain('');
    expect(ar[2].redirectTo).to.equal('products');
    expect(ar[2].pathMatch).to.equal('full');
  });
});