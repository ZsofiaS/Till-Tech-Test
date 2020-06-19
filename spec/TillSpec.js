'use strict';

describe('Till', function() {
  var Till = require('../lib/Till');

  it('has an items array and its empty by default', function() {
    let till = new Till();
    expect(till.items.length).toEqual(0);
  })
  it('stores the customers name, by default empty', function() {
    let till = new Till();
    expect(till.name).toEqual("");
  })
  describe('#enterName', function() {
    it('will store the customers name', function() {
      let till = new Till();
      till.enterName("Zso");
      expect(till.name).toEqual("Zso");
    })
  })
  describe('#order', function() {
    it('records a new line of order and saves it in items array', function() {
      let till = new Till();
      till.order("Tiramisu", 1);
      expect(till.items).toContain({
        "Tiramisu": 1
      })
    })
  })
})
