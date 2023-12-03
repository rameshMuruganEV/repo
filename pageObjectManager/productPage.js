const { expect } = require("@playwright/test");

class ProductPage {
  constructor(page) {
    this.page = page;
    this.productImg = page
      .getByRole("img", {
        name: "Hollister Backyard Sweatshirt",
      })
      .first();
    this.productHeading = page
      .getByRole("heading", { name: "Hollister Backyard Sweatshirt" })
      .locator("span");
    this.price = page.locator("#product-price-126");
    this.add2Cart = page.getByRole("button", { name: "Add to Cart" });
  }

  async clickAdd2CartProduct() {
    await this.add2Cart.click();
  }

  async assertWhetherProductImgIsAvailable() {
    await expect(
      this.page.getByAltText("Hollister Backyard Sweatshirt").first(),
    ).toBeVisible();
    await expect(
      this.page.getByAltText("Hollister Backyard Sweatshirt").nth(1),
    ).toBeVisible();
    await expect(
      this.page.getByAltText("Hollister Backyard Sweatshirt").nth(2),
    ).toBeVisible();
    await expect(
      this.page.getByAltText("Hollister Backyard Sweatshirt").last(),
    ).toBeVisible();
  }

  async assertWhetherTheProductNameisVisibleInProductPage(ProductName) {
    await expect(this.productHeading).toContainText(ProductName);
  }

  async assertPriceEvaluate(Price) {
    await expect(this.price).toContainText(Price);
  }
}
module.exports = { ProductPage };
