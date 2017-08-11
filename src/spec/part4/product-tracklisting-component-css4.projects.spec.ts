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

  it(`should have CSS that contains a button selector @product-tracklisting-component-css4`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);
    expect(_.find(parsed.cssRules, {selectorText: 'button'})).not.toBeUndefined();
  }));

  it(`should have CSS with a rule setting the line-height to 1 on the button selector @product-tracklisting-component-css4`, async(() => {
    let parsed = CSSOM.parse(productTracklistingCssFile);

    let buttonRule = _.find(parsed.cssRules, { selectorText: 'button' })

    expect(buttonRule).not.toBeUndefined();
    expect(buttonRule.style.parentRule.selectorText).toBe('button');
    expect(buttonRule.style['line-height']).toBe('1');
  }));
  
});
