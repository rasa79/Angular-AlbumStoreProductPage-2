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

let json = require('../../assets/album.json');

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
    }).compileComponents();
  }));

  beforeEach(inject([ProductService, MockBackend], (productService, mockBackend) => {
    product_service = productService;
    mock_backend = mockBackend;
  }));

  it(`should map the result of get request to json with rxjs map function @product-service-getalbum-method-maps-response-to-json`, async(() => {
    mock_backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: json
      });
      connection.mockRespond(new Response(options));
    });
    product_service.getAlbum(null).subscribe((response) => {
      expect(response._body).toBeUndefined();
      expect(response.id).toEqual(1);
      expect(response.artist).toEqual('The Prependers');
      expect(response.album.name).toEqual('Opacity Zero');
    }
    );
  }));
});
