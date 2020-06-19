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
    let text = `${this.date}\n${coffeeShop[0].shopName}\n\n${coffeeShop[0].address}\n\n${this.name}\n`
    this.items.forEach((item) => {
      for (let key in item){
        text = text + `${key} ${item[key]}x\n`;
      };
    });
    fs.writeFileSync("receipt.txt", text);
    return text + "Thank you!";
  }
}

module.exports = Till
