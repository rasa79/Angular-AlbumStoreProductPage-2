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
    since('There isn\'t a paragraph selector in the ProductDescriptionComponent\'s CSS file right now.').expect(_.find(parsed.cssRules, {selectorText: 'p'})).not.toBeUndefined();
  }));

  it(`should have CSS with a rule setting the font-size to 16px on the paragraph selector @product-description-component-css1`, async(() => {
    let parsed = CSSOM.parse(productDescriptionCssFile);

    let pRule = _.find(parsed.cssRules, { selectorText: 'p' })

    since('There isn\'t a paragraph selector in the ProductDescriptionComponent\'s CSS file right now.').expect(pRule).not.toBeUndefined();
    since('There isn\'t a paragraph selector in the ProductDescriptionComponent\'s CSS file right now.').expect(pRule.style.parentRule.selectorText).toBe('p');
    since('Your paragraph selector doesn\'t have a `font-size` property that\'s equal to `16px`.').expect(pRule.style['font-size']).toBe('16px');
  }));
  
});
