import { TestBed, async } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { Routes } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

let productDescriptionComponentExists = false;
let ProductDescriptionComponent;
try {
  ProductDescriptionComponent = require('../../app/product-description/product-description.component.ts').ProductDescriptionComponent;
  productDescriptionComponentExists = true;
} catch (e) {
  productDescriptionComponentExists = false;
}

let productPageComponentExists = false;
let ProductPageComponent;
try {
  ProductPageComponent = require('../../app/product-page/product-page.component.ts').ProductPageComponent;
  productPageComponentExists = true;
} catch (e) {
  productPageComponentExists = false;
}

describe('ProductDescription', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it('should have moved the description div out of the product-page component @product-description-html-moved', async(() => {
    expect(productPageComponentExists).toBe(true);
    expect(productDescriptionComponentExists).toBe(true);

    const ProductPageFixture = TestBed.createComponent(ProductPageComponent);

    expect(ProductPageFixture.nativeElement.querySelector('div.row > div.description')).toBeNull();
  }));

  it(`should have moved the description div into the product-description component @product-description-html-moved`, async(() => {
    expect(productPageComponentExists).toBe(true);
    expect(productDescriptionComponentExists).toBe(true);

    const ProductDescriptionFixture = TestBed.createComponent(ProductDescriptionComponent);

    expect(ProductDescriptionFixture.nativeElement.querySelector('div.description')).not.toBeNull();
  }));
    
});