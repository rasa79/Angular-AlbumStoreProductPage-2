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

  it(`should have CSS that contains a paragraph selector @product-description-component-css1`, async(() => {
    let parsed = CSSOM.parse(productDescriptionCssFile);
    expect(_.find(parsed.cssRules, {selectorText: 'p'})).not.toBeUndefined();
  }));

  it(`should have CSS with a rule setting the font-size to 16px on the paragraph selector @product-description-component-css1`, async(() => {
    let parsed = CSSOM.parse(productDescriptionCssFile);

    let pRule = _.find(parsed.cssRules, { selectorText: 'p' })

    expect(pRule).not.toBeUndefined();
    expect(pRule.style.parentRule.selectorText).toBe('p');
    expect(pRule.style['font-size']).toBe('16px');
  }));
  
});
