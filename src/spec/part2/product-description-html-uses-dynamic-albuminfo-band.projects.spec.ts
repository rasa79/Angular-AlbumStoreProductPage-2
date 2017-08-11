import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { TestBed, async, inject } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { Http, BaseRequestOptions, Response, ResponseOptions, RequestOptions } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { Routes } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

let json = require('../../assets/album.json');

let productDescriptionComponentExists = false;
let ProductDescriptionComponent;
try {
  ProductDescriptionComponent = require('../../app/product-description/product-description.component.ts').ProductDescriptionComponent;
  productDescriptionComponentExists = true;
} catch (e) {
  productDescriptionComponentExists = false;
}

let productServiceExists = false;
let ProductService;
try {
  ProductService = require('../../app/product.service.ts').ProductService;
  productServiceExists = true;
} catch (e) {
  productServiceExists = false;
}

describe('ProductDescription', () => {

  let product_service;
  let mock_backend;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
      providers: [ProductService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          useClass: Http,
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    }).compileComponents();
  }));

  beforeEach(inject([ProductService, MockBackend], (productService, mockBackend) => {
    product_service = productService;
    mock_backend = mockBackend;
  }));

  it(`should use artist name data from the albumInfo property in the HTML template @product-description-html-uses-dynamic-albuminfo-band`, async(() => {
    expect(productDescriptionComponentExists).toBe(true);

    mock_backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: json
      });
      connection.mockRespond(new Response(options));
    });

    const ProductDescriptionFixture = TestBed.createComponent(ProductDescriptionComponent);
    ProductDescriptionFixture.detectChanges();

    expect(ProductDescriptionFixture.debugElement.nativeElement.querySelector('.band-name').innerText).toEqual(json.artist);

    let htmlString = ""
    try {
      htmlString = require('../../app/product-description/product-description.component.html');
    } catch (e) {
    }
    if (htmlString != "") {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(htmlString, 'text/xml');
      const re = /{{\s*albumInfo\?\.artist\s*}}/
      expect(htmlDoc.querySelector('.band-name').textContent.match(re)).toEqual(jasmine.any(Array));  
    } else {
      expect(0).toBe(1);
    }
    
  }));

});
