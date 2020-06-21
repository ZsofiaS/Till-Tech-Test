'use strict';

const fs = require('fs');
const coffeeShop = require('../hipstercoffee')

class Till {
  constructor() {
    this.items = [];
    this.name = "";
    this.taxRate = 0.0864;
    this.coffeeShopPrices = coffeeShop[0].prices[0];
  }
  enterName(name) {
    this.name = name;
  }
  order(item, number) {
    if (this.coffeeShopPrices[item] && (Number.isInteger(number))) {
      this.items.push({
        [item]: number
      })
    } else {
      return "Invalid item or number";
    }
  }
  printReceipt() {
    let receiptContent = "";
    let header = `${this._formatDate()}\n${coffeeShop[0].shopName}\n\n${coffeeShop[0].address}\nPhone: ${coffeeShop[0].phone}\n\n${this.name}\n`;
    let footer = `\nTax: $${this._calculateTax()}\nTotal: $${this._calculateTotalWithTax()}\n\nThank you!`
    receiptContent = header + this._listItems() + footer;
    fs.writeFileSync("receipt.txt", receiptContent);
    this.items = [];
    return receiptContent;
  }
  _listItems() {
    let text = "";
    this.items.forEach((item) => {
      for (let key in item){
        let price = this.coffeeShopPrices[key];
        text = text + ` ${key} ${item[key]} x ${price}\n`;
      };
    });
    return text;
  }
  _formatDate() {
    let date = Date.now();
    return new Date(date).toLocaleString("en-IE");
  }
  _calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      for (let key in item) {
        total = total + (this.coffeeShopPrices[key] * item[key]);
      }
    });
    return total;
  }
  _calculateTax() {
    let tax = this._calculateTotal() * this.taxRate;
    return Number(tax.toFixed(2));
  }
  _calculateTotalWithTax() {
    let finalTotal = this._calculateTotal() + this._calculateTax();
    return Number(finalTotal.toFixed(2));
  }
}

module.exports = Till
