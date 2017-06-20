import { TestBed, async } from '@angular/core/testing';

const CSSOM = require('cssom');
const _ = require('lodash');

let productTracklistingCssFileExists = false;
let productTracklistingCssFile;
try {
  productTracklistingCssFile = require('../../app/product-tracklisting/product-tracklisting.component.css');
  productTracklistingCssFileExists = true;
} catch (e) {
  productTracklistingCssFileExists = false;
}

describe('ProductTracklisting', () => {

  it(`should have CSS that contains a ul selector @product-tracklisting-component-css2`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);
    expect(_.find(parsed.cssRules, {selectorText: 'ul'})).not.toBeUndefined();
  }));

  it(`should have CSS with a rule setting the list-style-type to none on the ul selector @product-tracklisting-component-css2`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);

    let ulRule = _.find(parsed.cssRules, { selectorText: 'ul' })

    expect(ulRule).not.toBeUndefined();
    expect(ulRule.style.parentRule.selectorText).toBe('ul');
    expect(ulRule.style['list-style-type']).toBe('none');
  }));
  
});
