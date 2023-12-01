const { LoginPage } = require("../pageObjectMagento/loginPage");
const { DashboardPage } = require("../pageObjectMagento/dashboardPage");
class POM_Magento {
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

module.exports = { POM_Magento };
