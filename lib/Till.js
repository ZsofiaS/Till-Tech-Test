'use strict';

const fs = require('fs');

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
    let text = `${this.date}\nThe Coffee Connection\n`
    this.items.forEach((item) => {
      for (let key in item){
        text = text + `${key} ${item[key]}x\n`;
      };
    });
    fs.writeFileSync("receipt.txt", text);
    return text;
  }
}

module.exports = Till
