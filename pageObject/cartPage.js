const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.getByRole("button", { name: " Add To Cart" });
    this.popUp = page.locator(".toast-bottom-right.toast-container");
    this.cartBtn = page.locator('[routerlink*="cart"]');
    this.productNameInCartPage = page.locator('h3:[has text="iphone 13 pro"]');
    this.continueShoppingBtn = page.getByRole("button", {name: "Continue Shopping"});
    this.myCart = page.getByRole("heading", { name: "My Cart" });
  }

  async clickAddToCartButton() {
    await this.addToCartBtn.click();
  }

  async clickCartButton() {
    await this.cartBtn.click();
  }

  async assertionForAddingProductToCartCartPageToast(CartPageToast) {
    await expect(this.popUp).toContainText(CartPageToast);
  }

  async assertionForAddingProductToCartCartPageURL(CartPageURL) {
    await expect(this.page).toHaveURL(CartPageURL);
  }
  async assertionForAddingProductToCart() {
     expect(this.productNameInCartPage).toBeTruthy();
    await expect(this.continueShoppingBtn).toBeVisible();
    await expect(this.myCart).toBeVisible();
  }
}

module.exports = { CartPage };
