'use strict';

const fs = require('fs');
const coffeeShop = require('../hipstercoffee')
const coffeeShopPrices = coffeeShop[0].prices[0]

class Till {
  constructor() {
    this.items = [];
    this.name = "";
    this.date = "";
  }
  enterName(name) {
    this.name = name;
  }
  order(item, number) {
    let key = item;
    let newItem = {
      [key]: number
    }
    this.items.push(newItem);
    this.date = this.formatDate();
  }
  formatDate() {
    let date = Date.now()
    return new Date(date).toLocaleString("en-IE")
  }
  printReceipt() {
    let text = `${this.date}\n${coffeeShop[0].shopName}\n\n${coffeeShop[0].address}\nPhone: ${coffeeShop[0].phone}\n\n${this.name}\n`
    this.items.forEach((item) => {
      for (let key in item){
        let price = coffeeShopPrices[key]
        text = text + ` ${key} ${item[key]} x ${price}\n`;
      };
    });
    text = text + `\nTax: ${this._calculateTax()}\n\nThank you!`
    fs.writeFileSync("receipt.txt", text);
    return text;
  }
  _calculateTax() {
    let total = 0;
    this.items.forEach((item) => {
      for (let key in item) {
        total = total + coffeeShopPrices[key]
      }
    });
    console.log(total* 0.0864)
    return total * 0.0864;
  }
}

module.exports = Till
