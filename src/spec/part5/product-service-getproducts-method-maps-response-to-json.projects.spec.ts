import { TestBed, async, inject } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { Http, BaseRequestOptions, Response, ResponseOptions, RequestOptions } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { Routes } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

let productServiceExists = false;
let ProductService;
try {
  ProductService = require('../../app/product.service.ts').ProductService;
  productServiceExists = true;
} catch (e) {
  productServiceExists = false;
}

let json = require('../../assets/products.json');

describe('ProductService', () => {

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
    });
  }));

  beforeEach(inject([ProductService, MockBackend], (productService, mockBackend) => {
    product_service = productService;
    mock_backend = mockBackend;
  }));

  it(`should map the result of get request to json with rxjs map function @product-service-getproducts-method-maps-response-to-json`, async(() => {
    mock_backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: json
      });
      connection.mockRespond(new Response(options));
    });
    product_service.getProducts().subscribe((response) => {
      since('It looks like you\'re not returning the getProducts method\'s response as JSON.').expect(response._body).expect(response._body).toBeUndefined();
      since('Your `getProducts` method is returning a JSON response, but not the correct JSON.  Are you sure your service class is setup correctly?').expect(response.length).toEqual(2);
      since('Your `getProducts` method is returning a JSON response, but not the correct JSON.  Are you sure your service class is setup correctly?').expect(response[0].id).toEqual(1);
      since('Your `getProducts` method is returning a JSON response, but not the correct JSON.  Are you sure your service class is setup correctly?').expect(response[0].artistName).toEqual('The Prependers');
      since('Your `getProducts` method is returning a JSON response, but not the correct JSON.  Are you sure your service class is setup correctly?').expect(response[0].albumName).toEqual('Opacity Zero');
      since('Your `getProducts` method is returning a JSON response, but not the correct JSON.  Are you sure your service class is setup correctly?').expect(response[1].id).toEqual(2);
      since('Your `getProducts` method is returning a JSON response, but not the correct JSON.  Are you sure your service class is setup correctly?').expect(response[1].artistName).toEqual('Regular Expressionists');
      since('Your `getProducts` method is returning a JSON response, but not the correct JSON.  Are you sure your service class is setup correctly?').expect(response[1].albumName).toEqual('Top, Right, Bottom, Left');
    }
    );
  }));
});
