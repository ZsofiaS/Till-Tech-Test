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
    it('throws error if item is not in menu or number given is invalid', function() {
      let till = new Till();
      expect(till.order("Taramusu", "one")).toEqual("Invalid item or number")
    })
  })
  describe('#printReceipt', function() {
    it('prints the receipt containing date & name of cafe & order', function() {
      spyOn(Date, 'now').and.returnValue(1592574130802);
      let date = new Date(1592574130802).toLocaleString("en-IE")
      let till = new Till();
      till.enterName("Zso");
      till.order("Americano", 1);
      expect(till.printReceipt()).toEqual(`${date}\nThe Coffee Connection\n\n123 Lakeside Way\nPhone: 16503600708\n\nZso\n Americano 1 x 3.75\n\nTax: $0.32\nTotal: $4.07\n\nThank you!`)
    })
  })
})
