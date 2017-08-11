import { TestBed, async, inject } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { Http, BaseRequestOptions, Response, ResponseOptions, RequestOptions } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

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

let productTracklistingComponentExists = false;
let ProductTracklistingComponent;
try {
  ProductTracklistingComponent = require('../../app/product-tracklisting/product-tracklisting.component.ts').ProductTracklistingComponent;
  productTracklistingComponentExists = true;
} catch (e) {
  productTracklistingComponentExists = false;
}

let productServiceExists = false;
let ProductService;
try {
  ProductService = require('../../app/product.service.ts').ProductService;
  productServiceExists = true;
} catch (e) {
  productServiceExists = false;
}

let json = require('../../assets/album.json');

xdescribe('ProductTracklisting', () => {

  let product_service;
  let mock_backend;
  let component;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
      providers: [MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          useClass: Http,
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: ProductService, useValue: product_service
        }
      ]
    }).compileComponents();
  }));

  beforeEach(inject([ProductService, MockBackend], (productService, mockBackend) => {
    product_service = productService;
    mock_backend = mockBackend;

    // spyOn(product_service, 'getAlbum');
  }));

  it(`should call getAlbum from the ProductService in ngOnInit and set the albumInfo property @product-tracklisting-ngoninit-calls-getalbum`, async(() => {
      let fixture = TestBed.createComponent(ProductTracklistingComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;

    // console.log(product_service.getCounter.calls.count());
    // mock_backend.connections.subscribe((connection: MockConnection) => {
    //   let options = new ResponseOptions({
    //     body: json
    //   });
    //   connection.mockRespond(new Response(options));
    // });

    // let pd = new ProductDescriptionComponent();
    // pd.ngOnInit();
    // console.log(pd.albumInfo);
    // product_service.getAlbum(null).subscribe((response) => {
    //   expect(response._body).toBeUndefined();
    //   expect(response.id).toEqual(1);
    //   expect(response.artist).toEqual('Turbid North');
    //   expect(response.album.name).toEqual('Eyes Alive');
    // }
    // );
  }));
});
