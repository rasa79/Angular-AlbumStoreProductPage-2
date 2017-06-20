import { TestBed, async } from '@angular/core/testing';

const CSSOM = require('cssom');
const _ = require('lodash');

let productDescriptionCssFileExists = false;
let productDescriptionCssFile;
try {
  productDescriptionCssFile = require('../../app/product-description/product-description.component.css');
  productDescriptionCssFileExists = true;
} catch (e) {
  productDescriptionCssFileExists = false;
}

describe('ProductDescriptionComponent', () => {

  it(`should have CSS that contains an img selector @product-description-component-css2`, async(() => {
    let parsed = CSSOM.parse(productDescriptionCssFile);
    expect(_.find(parsed.cssRules, {selectorText: 'img'})).not.toBeUndefined();
  }));

  it(`should have CSS with a rule setting the width to 100% on the img selector @product-description-component-css2`, async(() => {
    let parsed = CSSOM.parse(productDescriptionCssFile);
    let imgRule = _.find(parsed.cssRules, { selectorText: 'img' })

    expect(imgRule).not.toBeUndefined();
    expect(imgRule.style.parentRule.selectorText).toBe('img');
    expect(imgRule.style['width']).toBe('100%');
  }));
  
});
