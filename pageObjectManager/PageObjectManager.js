const { LoginPage } = require("../pageObjectManager/loginPage");
const { DashboardPage } = require("../pageObjectManager/dashboardPage");
class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
  }

  async getLoginPage() {
    return this.loginPage;
  }

  async getDashboardPage() {
    return this.dashboardPage;
  }
}

module.exports = { PageObjectManager };
