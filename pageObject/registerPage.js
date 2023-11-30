const { expect } = require('@playwright/test');

class RegisterPage {
  constructor(page) {
    this.page = page;
    this.registerLink = page.getByRole("link", { name: "Register" });
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.email = page.getByPlaceholder("email@example.com");
    this.phoneNumber = page.getByPlaceholder("enter your number");
    this.dropDown = page.locator(".custom-select.ng-untouched.ng-pristine.ng-valid");
    this.radioBtnMale = page.getByRole("radio", { name: "Male", exact: true });
    this.password = page.getByPlaceholder("Passsword", { exact: true });
    this.confirmPassword = page.getByPlaceholder("Confirm Passsword", { exact: true });
    this.checkBox = page.locator(".col-md-1");
    this.registerBtn = page.getByRole("button", { name: "Register" });
    this.popUp = page.locator(".toast-bottom-right.toast-container");
    this.loginBtn = page.getByRole("button", { name: "Login" });
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async fillTheRequired(FirstName, LastName, Email, PhoneNumber, DropDown, Passsword, ConfirmPassword) {
    await this.firstName.type(FirstName);
    await this.lastName.type(LastName);
    await this.email.type(Email);
    await this.phoneNumber.type(PhoneNumber);
    await this.dropDown.selectOption(DropDown);
    await this.radioBtnMale.setChecked(true);
    await this.password.type(Passsword);
    await this.confirmPassword.type(ConfirmPassword);
  }
  async selectCheckBox() {
    await this.checkBox.click();
  }

  async clickRegisterButton() {
    await this.registerBtn.click();
  }

  async goToPage(URL) {
    await this.page.goto(URL);
  }

  async clickLoginButton() {
    await this.loginBtn.click();
  }

  async assertionForExistingUserRegistering(ExistingUserRegistrationMessage) {
    await expect(this.popUp).toBeVisible();
    const popUpMsg = await this.popUp.textContent();
   expect(await popUpMsg).toContain(ExistingUserRegistrationMessage);

  }

};
module.exports = { RegisterPage };
