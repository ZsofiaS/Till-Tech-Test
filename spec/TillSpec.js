'use strict';

describe('Till', function() {
  var Till = require('../lib/Till');

  it('has an items array and its empty by default', function() {
    let till = new Till();
    expect(till.items.length).toEqual(0);
  })
})
