import { TestBed, async } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { AppComponent } from '../../app/app.component';

import { BrowserModule } from '@angular/platform-browser';

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

let productDescriptionComponentExists = false;
let ProductDescriptionComponent;
try {
  ProductDescriptionComponent = require('../../app/product-description/product-description.component.ts').ProductDescriptionComponent;
  productDescriptionComponentExists = true;
} catch (e) {
  productDescriptionComponentExists = false;
}

describe('ProductPageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it(`should contain the app-product-description element @app-product-description-selector`, async(() => {
    expect(productPageComponentExists).toBe(true);
    expect(productDescriptionComponentExists).toBe(true);

    const ProductPageFixture = TestBed.createComponent(ProductPageComponent);
    ProductPageFixture.detectChanges();

    expect(ProductPageFixture.nativeElement.querySelector('app-product-description'));
  }));

  it(`should contain the app-product-description element as a child of the first element with a class of row @app-product-description-selector`, async(() => {
    expect(productPageComponentExists).toBe(true);
    expect(productDescriptionComponentExists).toBe(true);

    const ProductPageFixture = TestBed.createComponent(ProductPageComponent);
    ProductPageFixture.detectChanges();
    
    expect(ProductPageFixture.nativeElement.querySelector('div.row').querySelector('app-product-description').nodeName).toBe('APP-PRODUCT-DESCRIPTION');
  }));

});
