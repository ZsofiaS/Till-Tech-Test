'use strict';

class Till {
  constructor() {
    this.items = [];
    this.name = "";
  }
  enterName(name) {
    this.name = name;
  }
  order(item, number) {
    let key = item;
    let newItem = {}
    newItem[key] = number
    this.items.push(newItem)
  }
}

module.exports = Till
