const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;

    this.signInBtn = page.getByRole("button", { name: "Sign In" });
    this.firstName = page.getByRole("textbox", { name: "First Name*" });
    this.lastName = page.getByRole("textbox", { name: "Last Name*" });
    this.email = page.getByLabel("Email", { exact: true });
    this.password = page.getByRole("textbox", { name: "Password*" });
    this.confirmPassword = page.getByRole("textbox", {
      name: "Confirm Password*",
    });
    this.signInBtn = page.getByRole("button", { name: "Sign In" });
    this.newCustomerBanner = page.getByText("Create New Customer Account");
    this.customerLoginBanner = page.getByText("Customer Login");
    this.forgotPassword = page.getByRole("link", {
      name: "Forgot Your Password?",
    });
    this.fields = page.getByText(
      "Personal Information First Name Last Name Sign-in Information Email Password",
    );
    this.createAccountBtn = page.getByRole("button", {
      name: "Create an Account",
    });
    this.userBanerInProfile = page.locator(
      "div[class='panel header'] span[class='logged-in']",
    );
    this.signedOutMessage = page.getByText("You are signed out");
  }

  async goTo(Url) {
    await this.page.goto(Url);
  }

  async clickCreateAccountBtn() {
    await this.createAccountBtn.click();
  }

  async fillTheNewUserFields(
    FirstName,
    LastName,
    Email,
    Password,
    ConfirmPassword,
  ) {
    await this.firstName.fill(FirstName);
    await this.lastName.fill(LastName);
    await this.email.fill(Email);
    await this.password.first().fill(Password);
    await this.confirmPassword.last().fill(ConfirmPassword);
  }

  async fillTheLoginFields(Email, Password) {
    await this.email.fill(Email);
    await this.password.first().fill(Password);
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
  }

  async pageLoadState() {
    await this.page.waitForLoadState("load");
  }

  async waitForUserBanerInProfile() {
    await this.userBanerInProfile.waitFor();
  }

  async assertnewCustomerBanner() {
    await expect(this.newCustomerBanner).toBeVisible();
  }

  async assertLoginCustomerBanner() {
    await expect(this.customerLoginBanner).toBeVisible();
  }

  async assertforgotPassword() {
    await expect(this.forgotPassword).toBeVisible();
  }

  async assertsignUpURL(CreateAccountURL) {
    await expect(this.page).toHaveURL(CreateAccountURL);
  }

  async assertFieldsAreVisible() {
    await expect(this.fields).toBeVisible();
  }

  async assertSuccesfulAccountCreation(SuccessfulAccountCreationText) {
    await expect(
      this.page.getByText(SuccessfulAccountCreationText),
    ).toBeVisible();
  }

  async assertUserBanerInProfile(Banner) {
    await expect(
      this.page.locator("div[class='panel header'] span[class='logged-in']"),
    ).toHaveText(Banner);
  }

  async assertUserSignedOut() {
    await expect(this.signedOutMessage).toBeVisible();
  }
}
module.exports = { LoginPage };
