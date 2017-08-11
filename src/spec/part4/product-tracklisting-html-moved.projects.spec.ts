import { TestBed, async } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { Routes } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

let productPageComponentExists = false;
let ProductPageComponent;
try {
  ProductPageComponent = require('../../app/product-page/product-page.component.ts').ProductPageComponent;
  productPageComponentExists = true;
} catch (e) {
  productPageComponentExists = false;
}

let productTracklistingComponentExists = false;
let ProductTracklistingComponent;
try {
  ProductTracklistingComponent = require('../../app/product-tracklisting/product-tracklisting.component.ts').ProductTracklistingComponent;
  productTracklistingComponentExists = true;
} catch (e) {
  productTracklistingComponentExists = false;
}

describe('ProductPage', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it('should have moved the tracklisting div out of the product-page component @product-tracklisting-html-moved', async(() => {
    expect(productTracklistingComponentExists).toBe(true);
    expect(productPageComponentExists).toBe(true);

    const ProductPageFixture = TestBed.createComponent(ProductPageComponent);

    if (ProductPageFixture.nativeElement.querySelector('app-product-tracklisting')) {
      expect(ProductPageFixture.nativeElement.querySelectorAll('div.tracklisting').length).toBe(1);
    } else {
      expect(ProductPageFixture.nativeElement.querySelectorAll('div.tracklisting').length).toBe(0);
    }
  }));

  it(`should contain the app-product-tracklisting element @product-tracklisting-html-moved`, async(() => {
    expect(productPageComponentExists).toBe(true);

    const ProductPageFixture = TestBed.createComponent(ProductPageComponent);

    expect(ProductPageFixture.nativeElement.querySelector('app-product-tracklisting')).not.toBeNull()
    expect(ProductPageFixture.nativeElement.querySelector('app-product-tracklisting').nodeName).toBe('APP-PRODUCT-TRACKLISTING');    
  }));
  
  
});

describe('ProductTracklisting', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it(`should have moved the tracklisting div into the product-tracklisting component @product-tracklisting-html-moved`, async(() => {
    expect(productTracklistingComponentExists).toBe(true);
    expect(productPageComponentExists).toBe(true);

    const ProductTracklistingFixture = TestBed.createComponent(ProductTracklistingComponent);

    expect(ProductTracklistingFixture.nativeElement.querySelectorAll('div.tracklisting').length).toBeGreaterThan(0);
  }));

});