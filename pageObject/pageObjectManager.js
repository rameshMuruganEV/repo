const {RegisterPage} = require('../pageObject/registerPage');
const {LoginPage} = require('../pageObject/loginPage');
const {DashboardPage} = require('../pageObject/dashboardPage');
const {CheckoutPage} = require('../pageObject/checkoutPage');
const {CartPage} = require('../pageObject/cartPage');
class PageObjectManager {

    constructor(page) {

        this.page = page;
        this.registerPage = new RegisterPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
    }

    async getRegisterPage() {

        return this.registerPage;

    }

    async getLoginPage() {

        return this.loginPage;

    }

    async getDashboardPage() {

        return this.dashboardPage;

    }

    async getCartPage() {

        return this.cartPage;

    }

    async getCheckoutPage() {

        return this.checkoutPage;

    }
}

module.exports = { PageObjectManager }
