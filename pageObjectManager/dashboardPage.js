const { expect } = require("@playwright/test");

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole("link", { name: "Sign In" });
    this.createAccountLink = page.getByRole("link", {
      name: "Create an Account",
    });
    this.dropDownProfile = page
      .getByRole("banner")
      .locator("button")
      .filter({ hasText: "Change" });
    this.signOutLink = page.getByRole("link", { name: "Sign Out" });
    this.myAccountLink = page.getByRole("link", { name: "My Account" });
    this.menCategory = page
      .getByRole("menuitem")
      .filter({ hasText: "Men" })
      .last();
    this.womenCategory = page
      .getByRole("menuitem")
      .filter({ hasText: "Women" })
      .first();
    this.sweatshirts = page.getByRole("link", {
      name: "Hoodies & Sweatshirts",
    });
    this.product = page.getByText("Hollister Backyard Sweatshirt");
  }

  async clickSignInLink() {
    await this.signInLink.click();
  }

  async clickMyAccountLink() {
    await this.myAccountLink.click();
  }

  async selectProduct() {
    await this.product.click();
  }
  async selectSweatshirts() {
    await this.sweatshirts.click();
  }

  async selectMenCategory() {
    await this.menCategory.click();
  }
  async clickCreateAccountLink() {
    await this.createAccountLink.click();
  }

  async clickdropDownProfile() {
    await this.page
      .getByRole("banner")
      .locator("button")
      .filter({ hasText: "Change" })
      .click();
  }

  async clickSignoutOption() {
    await this.signOutLink.click();
  }
}
module.exports = { DashboardPage };
