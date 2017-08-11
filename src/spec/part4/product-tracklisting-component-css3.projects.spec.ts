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

  it(`should have CSS that contains an li selector @product-tracklisting-component-css3`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);
    expect(_.find(parsed.cssRules, {selectorText: 'li'})).not.toBeUndefined();
  }));

  it(`should have CSS with a rule setting the display to block and the line-height to 30px on the li selector @product-tracklisting-component-css3`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);

    let liRule = _.find(parsed.cssRules, { selectorText: 'li' })

    expect(liRule).not.toBeUndefined();
    expect(liRule.style.parentRule.selectorText).toBe('li');
    expect(liRule.style['display']).toBe('block');
    expect(liRule.style['line-height']).toBe('30px');
  }));
  
});
