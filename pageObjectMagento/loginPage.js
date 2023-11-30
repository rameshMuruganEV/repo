const { expect } = require("@playwright/test");
class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole("link", { name: "Sign In" });
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
  }

  async goTo(Url) {
    await this.page.goto(Url);
  }

  async clickSignInLink() {
    await this.signInLink.click();
  }

  async clickCreateAccountBtn() {
    await this.createAccountBtn.click();
  }

  async fillTheFields(FirstName, LastName, Email, Password, ConfirmPassword) {
    await this.firstName.fill(FirstName);
    await this.lastName.fill(LastName);
    await this.email.fill(Email);
    await this.password.first().fill(Password);
    await this.confirmPassword.last().fill(ConfirmPassword);
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
  }

  async assertnewCustomerBanner() {
    await expect(this.newCustomerBanner).toBeVisible();
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

  async assertUserBanerInProfile(FirstName, LastName) {
    await expect(
      this.page.getByRole("banner").getByText("Welcome", FirstName + LastName),
    ).toBeVisible();
  }
}
module.exports = { LoginPage };
