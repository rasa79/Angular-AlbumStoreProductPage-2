import { TestBed, async } from '@angular/core/testing';

let productTracklistingComponentExists = false;
let ProductTracklistingComponent;
try {
  ProductTracklistingComponent = require('../../app/product-tracklisting/product-tracklisting.component.ts').ProductTracklistingComponent;
  productTracklistingComponentExists = true;
} catch (e) {
  productTracklistingComponentExists = false;
}

describe('Project', () => {

  it(`should create the product tracklisting component @product-tracklisting-component-created`, async(() => {
    expect(productTracklistingComponentExists).toBe(true);
  }));

});
