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

  it(`should have CSS that contains a .tracklisting selector @product-tracklisting-component-css1`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);
    expect(_.find(parsed.cssRules, {selectorText: '.tracklisting'})).not.toBeUndefined();
  }));

  it(`should have CSS with a rule setting the font-size to 16px and the padding-top to 10px on the .tracklisting selector @product-tracklisting-component-css1`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);

    let tRule = _.find(parsed.cssRules, { selectorText: '.tracklisting' })

    expect(tRule).not.toBeUndefined();
    expect(tRule.style.parentRule.selectorText).toBe('.tracklisting');
    expect(tRule.style['font-size']).toBe('16px');
    if (tRule.style['padding-top']) {
      expect(tRule.style['padding-top']).toBe('10px');
    } else if (tRule.style['padding']) {
      let padding = tRule.style['padding'];
      expect(tRule.style['padding']).toBe('10px 0 0 0');
    } else {
      expect(1).toBe(0);
    }
  }));
  
});
