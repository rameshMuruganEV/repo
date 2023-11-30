const { expect } = require("@playwright/test");

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.createAccountLink = page.getByRole("link", {
      name: "Create an Account",
    });
  }
  async clickCreateAccountLink() {
    await this.createAccountLink.click();
  }
}
module.exports = { DashboardPage };
