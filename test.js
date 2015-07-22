'use strict';

/**
 * Dependencies
 */

const compact = require('./');

require('chai').should();


/**
 * Tests
 */

describe ('array-compact', function () {

  it ('return an array copy without falsy values', function () {
    let arr = ['', 0, 1, 'a', false, true];

    compact(arr).should.deep.equal([1, 'a', true]);
    arr.should.deep.equal(['', 0, 1, 'a', false, true]);
  });

});
