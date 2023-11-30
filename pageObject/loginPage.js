const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByPlaceholder("email@example.com");
    this.password = page.getByPlaceholder("enter your passsword");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.popUp = page.locator(".toast-bottom-right.toast-container");
    // this.popUpMsg = page.locator(".toast-bottom-right.toast-container").textContent();
    this.notHavingAccountLink = page.getByRole("paragraph", {
      name: "Don't have an account? Register here",
    });
    this.forgotPasswordLink = page.getByRole("link", {
      name: "Forgot password?",
    });
    this.emailRequired = page.locator(".invalid-feedback").first();
    this.passwordRequired = page.locator(".invalid-feedback").nth(1);
    this.confirmPasswordRequired = page.locator(".invalid-feedback").last();
    this.saveNewPassword = page.getByRole("button", {
      name: "Save New Password",
    });
    this.forgotPasswordHeading = page.getByRole("heading", {
      name: "Enter New Password",
    });
    this.forgotPasswordLogin = page.getByRole("link", { name: "Login" });
    this.forgotPasswordRegister = page.getByRole("link", { name: "Register" });
    this.forgotPasswordPageEmail = page.getByRole("textbox", {
      name: "Enter your email address",
    });
    this.forgotPasswordPagePassword = page.getByRole("textbox", {
      name: "Passsword",
    });
    this.forgotPasswordPageConfirmPassword = page.getByRole("textbox", {
      name: "Confirm Password",
    });
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async clickForgotPasswordLogin() {
    await this.forgotPasswordLogin.click();
  }

  async clickForgotPasswordRegister() {
    await this.forgotPasswordRegister.click();
  }

  async clickForgotPasswordSaveNewPassword() {
    await this.saveNewPassword.click();
  }
  async clickNotHavingAccountLink() {
    await this.notHavingAccountLink.click();
  }

  async enterLoginCredentials(Email, Password) {
    await this.email.type(Email);
    await this.password.type(Password);
  }

  async fillForgotPasswordPageDetails(
    ForgotPasswordPageEmail,
    ForgotPasswordPagePassword,
    ForgotPasswordPageConfirmPassword,
  ) {
    await this.forgotPasswordPageEmail.type(ForgotPasswordPageEmail);
    await this.forgotPasswordPagePassword.type(ForgotPasswordPagePassword);
    await this.forgotPasswordPageConfirmPassword.type(
      ForgotPasswordPageConfirmPassword,
    );
  }

  async clickLoginButton() {
    await this.loginBtn.click();
  }

  async goTo(URL) {
    await this.page.goto(URL);
  }

  async assertionForLoginUserValidPopUPMessage(ValidPopUPMessage) {
    await expect(await this.popUp).toBeVisible();
    await expect(await this.popUp).toContainText(ValidPopUPMessage);
  }

  async assertionForLoginUserDashboardPageURL(DashboardPageURL) {
    await expect(this.page).toHaveURL(DashboardPageURL);
  }

  async assertionForLoginUserWithIncorrectDetails(InValidPopUPMessage) {
    await expect(await this.popUp).toBeVisible();
    await expect(await this.popUp).toContainText(InValidPopUPMessage);
  }

  async assertionForLoginUserWithEmptyFieldsForgotPasswordPage() {
    await expect(this.emailRequired).toBeVisible();
    await expect(this.passwordRequired).toBeVisible();
    await expect(this.confirmPasswordRequired).toBeVisible();
  }

  async assertionforLoginUserWithEmptyFieldsLoginPage() {
    await expect(this.emailRequired).toBeVisible();
    await expect(this.passwordRequired).toBeVisible();
  }

  async assertionForLoginUserForgotPasswordPageURL(ForgotPasswordURL) {
    await expect(this.page).toHaveURL(ForgotPasswordURL);
  }

  async assertionForLoginPageURL(LoginPageURL) {
    await expect(this.page).toHaveURL(LoginPageURL);
  }

  async assertionForRegisterPageURL(RegisterPageURL) {
    await expect(this.page).toHaveURL(RegisterPageURL);
  }

  async assertionForSuccessfulResetPassword(SucessfulPasswordReset) {
    await expect(await this.popUp).toContainText(SucessfulPasswordReset);
  }

  async assertionForLoginUserForgotPasswordHeading(ForgotPasswordHeading) {
    await expect(this.forgotPasswordHeading).toHaveText(ForgotPasswordHeading);
  }

  async assertionForLogin_RegisterButtonValidation() {
    await expect(this.forgotPasswordLogin).toBeVisible();
    await expect(this.forgotPasswordRegister).toBeVisible();
  }
}
module.exports = { LoginPage };
