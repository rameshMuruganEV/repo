const { expect, chromium, playwright } = require("@playwright/test");
const { Given, When, Then } = require("@cucumber/cucumber");
const { PageObjectManager } = require("../../pageObject/pageObjectManager");

Given(
  ": Enter the {string} and {string} in the loginPage {string}.",
  { timeout: 10 * 1000 },
  async function (email, password, loginPageUrl) {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.pageObjectManager = new PageObjectManager(this.page);
    this.loginPage = await this.pageObjectManager.getLoginPage();

    await this.loginPage.goTo(loginPageUrl);
    await this.loginPage.enterLoginCredentials(email, password);
  },
);

When(": Click the login Button.", { timeout: 10 * 1000 }, async function () {
  await this.loginPage.clickLoginButton();
});

Then(
  ": Check whether user is logged in to dashboard page {string} and success pop-up is shown {string}.",
  { timeout: 10 * 1000 },
  async function (dasboardPageUrl, ValidToastMsg) {
    await this.loginPage.assertionForLoginUserDashboardPageURL(dasboardPageUrl);
    await this.loginPage.assertionForLoginUserValidPopUPMessage(ValidToastMsg);
  },
);

Then(
  ": Verify error pop-up {string} is shown.",
  { timeout: 10 * 1000 },
  async function (InValidToastMsg) {
    await this.loginPage.assertionForLoginUserWithIncorrectDetails(
      InValidToastMsg,
    );
  },
);

Given(": Goto the URL {string}.", { timeout: 10 * 1000 }, async function (url) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  this.page = await context.newPage();
  this.pageObjectManager = new PageObjectManager(this.page);
  this.loginPage = await this.pageObjectManager.getLoginPage();

  await this.loginPage.goTo(url);
});

When(
  ": Click the forgot password link.",
  { timeout: 10 * 1000 },
  async function () {
    await this.loginPage.clickForgotPassword();
  },
);

Then(
  ": Verify forgot password page {string} is launched.",
  { timeout: 10 * 1000 },
  async function (forgotPasswordPageURL) {
    await this.loginPage.assertionForLoginUserForgotPasswordPageURL(
      forgotPasswordPageURL,
    );
  },
);

Then(
  ": Check Forgot password page {string} heading is visible.",
  { timeout: 10 * 1000 },
  async function (forgotPasswordHeading) {
    await this.loginPage.assertionForLoginUserForgotPasswordHeading(
      forgotPasswordHeading,
    );
  },
);

When(
  ": Click on the save new password button.",
  { timeout: 10 * 1000 },
  async function () {
    await this.loginPage.clickForgotPasswordSaveNewPassword();
  },
);

Then(
  ": Verify user is shown to fill the empty fields.",
  { timeout: 10 * 1000 },
  async function () {
    await this.loginPage.assertionForLoginUserWithEmptyFieldsForgotPasswordPage();
  },
);

When(
  ": Fill the empty fields with email {string} , password {string} , confirm password {string}.",
  { timeout: 10 * 1000 },
  async function (email, password, confirmPassword) {
    await this.loginPage.fillForgotPasswordPageDetails(
      email,
      password,
      confirmPassword,
    );
  },
);

Then(
  ": Verify the password is changed pop-up {string} is shown.",
  { timeout: 10 * 1000 },
  async function (successfulResetPassword) {
    await this.loginPage.assertionForSuccessfulResetPassword(
      successfulResetPassword,
    );
  },
);
