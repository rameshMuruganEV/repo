const { expect } = require("@playwright/test");

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.getByRole("button", { name: "Checkout" });
    this.creditCard = page.locator('[type*="text"]').first();
    this.expiryMonth = page.locator(".input.ddl").first();
    this.expiryDay = page.locator(".input.ddl").last();
    this.cvv = page.locator('[type*="text"]').nth(1);
    this.nameOnCard = page.locator('[type*="text"]').nth(2);
    this.applyCoupon = page.locator('[type*="text"]').nth(3);
    this.applyCouponBtn = page.getByRole("button", { name: "Apply Coupon" });
    this.country = page.getByRole("textbox", { name: "Select Country" });
    this.dropDown = page.locator(".ta-results");
    this.options = this.dropDown.locator("button");
    this.placeOrder = page.locator(".btnn.action__submit.ng-star-inserted");
    this.buyBtn = page.getByRole("button", { name: "Buy Now" });
    this.couponApplied = page.locator(".mt-1.ng-star-inserted");
    this.popUp = page.locator(".toast-bottom-right.toast-container");
  }

  async clickTheCheckoutButton() {
    await this.checkoutBtn.click();
  }

  async fillInTheRequiredFields(CreditCard,ExpiryMonth,ExpiryDay,CVV,NameONCard,ApplyCoupon) {
    await this.creditCard.fill(CreditCard);
    await this.expiryMonth.selectOption(ExpiryMonth);
    await this.expiryDay.selectOption(ExpiryDay);
    await this.cvv.type(CVV);
    await this.nameOnCard.type(NameONCard);
    await this.applyCoupon.type(ApplyCoupon);
  }

  async selectCountry(Country) {
    await this.country.type(Country.trim(), { delay: 300 });
    await this.dropDown.waitFor();
    this.dropDownCountrySearchCount = await this.options.count();
    for (let index = 0; index < this.dropDownCountrySearchCount; ++index) {
      const countryName = await this.options.nth(index).textContent();
      if (countryName === Country) {
        await this.options.nth(index).click();
        break;
      }
    }
  }

  async clickApplyCouponButton() {
    await this.applyCouponBtn.click();
  }

  async clickPlaceOrderButton() {
    await this.placeOrder.click();
  }

  async clickBuyNowButton() {
    await this.buyBtn.click();
  }

  async assertionForCheckingoutTheProductCouponSuccess(CouponSuccess) {
    await expect(this.couponApplied).toContainText(CouponSuccess);
  }

  async assertionForCheckingoutTheProductSuccesfullOrderPlacement(SuccesfullOrderPlacement) {
    await expect(this.popUp).toContainText(SuccesfullOrderPlacement);
  }
}
module.exports = { CheckoutPage };
