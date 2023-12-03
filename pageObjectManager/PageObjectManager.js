const { LoginPage } = require("../pageObjectManager/loginPage");
const { DashboardPage } = require("../pageObjectManager/dashboardPage");
const { AccountPage } = require("../pageObjectManager/accountPage");
const { ProductPage } = require("../pageObjectManager/productPage");

class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.accountPage = new AccountPage(this.page);
    this.productPage = new ProductPage(this.page);
  }

  async getLoginPage() {
    return this.loginPage;
  }

  async getDashboardPage() {
    return this.dashboardPage;
  }

  async getAccountPage() {
    return this.accountPage;
  }

  async getProductPage() {
    return this.productPage;
  }
}

module.exports = { PageObjectManager };
