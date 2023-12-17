const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
  }
}
module.exports = { CartPage };
