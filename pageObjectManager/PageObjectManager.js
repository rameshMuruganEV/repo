const { LoginPage } = require("../pageObjectManager/loginPage");
const { DashboardPage } = require("../pageObjectManager/dashboardPage");
const { AccountPage } = require("../pageObjectManager/accountPage");
class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.accountPage = new AccountPage(this.page);
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
}

module.exports = { PageObjectManager };
